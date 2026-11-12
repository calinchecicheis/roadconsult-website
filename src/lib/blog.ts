import { getCollection, type CollectionEntry } from 'astro:content';
import { ROUTES, LANGS, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;

export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/');
export const postPath = (p: Post) => `${ROUTES.blog[postLang(p)]}${postSlug(p)}/`;

/** Articles in one language, newest first. */
export async function postsIn(lang: Lang) {
  const all = await getCollection('blog', (p) => postLang(p) === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Paths of the same article in every language it has been written in. */
export async function translationsOf(post: Post) {
  const all = await getCollection('blog', (p) => p.data.key === post.data.key);
  const out: Partial<Record<Lang, string>> = {};
  for (const l of LANGS) {
    const match = all.find((p) => postLang(p) === l);
    if (match) out[l] = postPath(match);
  }
  return out;
}

/** Rough reading time, at 200 words a minute. */
export const readingMinutes = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString({ ro: 'ro-RO', en: 'en-GB', de: 'de-DE' }[lang], { day: 'numeric', month: 'long', year: 'numeric' });
