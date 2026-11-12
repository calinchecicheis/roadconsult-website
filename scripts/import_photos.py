"""Download the project photos of the old WordPress site (listed in scripts/photos.txt),
fix their orientation and save web-ready WebP copies in public/projects/<group>/:
  NN.webp     max 1600 px on the long side (lightbox)
  NN-sm.webp  max 720 px (carousel)
and their sizes in src/data/photos.json. Run once; the old site will go away."""
import json, os, sys, time, urllib.request
from io import BytesIO
from PIL import Image, ImageOps

BASE = 'https://roadconsult.ro/wp-content/uploads/'
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

def fetch(url):
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': 'image/*'})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
                if not r.headers.get('Content-Type', '').startswith('image/'):
                    raise RuntimeError(f'not an image: {r.headers.get("Content-Type")}')
                return data
        except Exception as e:  # noqa: BLE001
            print(f'  retry {attempt + 1} for {url}: {e}', flush=True)
            time.sleep(2 * (attempt + 1))
    raise SystemExit(f'failed: {url}')

def save(img, path, size, quality):
    im = img.copy()
    im.thumbnail((size, size), Image.LANCZOS)
    im.save(path, 'WEBP', quality=quality, method=6)
    return im.size

out = {}
counts = {}
for line in open('scripts/photos.txt', encoding='utf-8'):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    group, path = line.split('|')
    counts[group] = counts.get(group, 0) + 1
    n = f'{counts[group]:02d}'
    folder = f'public/projects/{group}'
    os.makedirs(folder, exist_ok=True)
    print(f'{group}/{n} <- {path}', flush=True)
    img = ImageOps.exif_transpose(Image.open(BytesIO(fetch(BASE + path)))).convert('RGB')
    w, h = save(img, f'{folder}/{n}.webp', 1600, 78)
    sw, sh = save(img, f'{folder}/{n}-sm.webp', 720, 72)
    out.setdefault(group, []).append({'src': f'/projects/{group}/{n}.webp', 'sm': f'/projects/{group}/{n}-sm.webp', 'w': w, 'h': h, 'sw': sw, 'sh': sh})

os.makedirs('src/data', exist_ok=True)
json.dump(out, open('src/data/photos.json', 'w'), indent=1)
print('done', {k: len(v) for k, v in out.items()})
