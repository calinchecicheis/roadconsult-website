// Cloudflare Pages Function for the homepage only ("/").
// Sends first-time visitors to their language based on the country of their IP:
//   Romania / Moldova -> Romanian (stays on /)
//   Germany / Austria / Switzerland / Liechtenstein / Luxembourg -> /de/
//   everyone else -> /en/
// A visitor's own choice in the language menu (the "lang" cookie) always wins,
// and search engine bots are never redirected, so every language stays indexable.
const GERMAN = ['DE', 'AT', 'CH', 'LI', 'LU'];
const ROMANIAN = ['RO', 'MD'];
const BOT = /bot|crawl|spider|slurp|lighthouse|pagespeed|facebookexternalhit|linkedin|whatsapp|preview/i;

export async function onRequestGet(context) {
  const { request, next } = context;
  const ua = request.headers.get('user-agent') || '';
  if (BOT.test(ua)) return next();

  const cookie = request.headers.get('cookie') || '';
  const chosen = cookie.match(/(?:^|;\s*)lang=(ro|en|de)\b/);
  let lang = chosen ? chosen[1] : null;

  if (!lang) {
    const country = (request.cf && request.cf.country) || request.headers.get('cf-ipcountry') || '';
    lang = ROMANIAN.includes(country) ? 'ro' : GERMAN.includes(country) ? 'de' : 'en';
  }

  if (lang === 'ro') {
    const res = await next();
    const out = new Response(res.body, res);
    out.headers.set('Vary', 'Cookie');
    out.headers.set('Cache-Control', 'private, max-age=0, must-revalidate');
    return out;
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: new URL(`/${lang}/`, request.url).toString(),
      'Cache-Control': 'private, no-store',
      Vary: 'Cookie',
    },
  });
}
