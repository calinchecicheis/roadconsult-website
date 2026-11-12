# roadconsult.ro

Website for Road Consult (MC Compas Road Consult SRL), built with [Astro](https://astro.build) as a fully static site, in Romanian, English and German, hosted on Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Structure

- `src/i18n.ts`: every piece of text in RO / EN / DE, plus the localized URL of each page (`ROUTES`). Edit copy here.
- `src/config.ts`: company details, phone / WhatsApp, email, form key.
- `src/components/pages/`: page templates. The files in `src/pages/` only pick a template and a language.
- `src/components/Contours.astro`: the decorative contour-line drawing (static SVG).
- `functions/index.js`: Cloudflare Pages Function that sends first-time visitors of `/` to `/en/` or `/de/` based on their country. A language picked in the menu is remembered in a `lang` cookie and always wins. Bots are never redirected.
- `public/_redirects`: 301s from old WordPress URLs. The old `/servicii/`, `/proiecte/`, `/despre/` and `/contact/` keep the same address.

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: Astro. Build command `npm run build`, output directory `dist`.
3. Add the custom domain `roadconsult.ro` (and `www`) under the project's Custom domains.

## Forms

Quote and newsletter forms post to [Web3Forms](https://web3forms.com) (free). Create an access key for contact@roadconsult.ro and put it in `web3formsKey` in `src/config.ts`.

## Still to confirm

- A higher-resolution logo, and project photos if wanted.
