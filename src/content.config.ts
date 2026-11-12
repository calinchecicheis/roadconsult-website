import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog articles live in src/content/blog/<lang>/<slug>.md.
 * Translations of the same article share a `key`, which links them for hreflang and the language switcher.
 */
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    key: z.string(),
    service: z.enum(['survey', 'planning', 'consulting']).optional(),
  }),
});

export const collections = { blog };
