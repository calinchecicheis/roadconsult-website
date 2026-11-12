# Writing blog articles

This guide is for anyone adding an article, including the scheduled task that drafts one as a pull request.

## Where articles live

Each article is a Markdown file, one per language, all sharing the same `key`:

```
src/content/blog/ro/<slug-ro>.md
src/content/blog/en/<slug-en>.md
src/content/blog/de/<slug-de>.md
```

Front matter:

```yaml
---
title: Up to 90 characters, sentence case
description: Up to 170 characters. Shown in Google results, the blog list and under the title.
date: 2026-11-12
key: short-shared-id        # same in all three languages
service: survey             # optional: survey | planning | consulting, preselects the quote form
---
```

Slugs are lowercase, hyphenated, without diacritics, in the article's own language.

## Audience and voice

- Readers are the people who order or carry out road works in western Romania (Bihor, Arad, Timiș): town hall and county council staff, contractors, site managers, developers and private landowners. EN and DE readers are foreign contractors and investors.
- Road Consult is a small engineering firm from Marghita (founded 2017): topographic surveys and setting out, planning and coordination of works, technical consulting. Equipment: Leica FlexLine TS09plus total station, Leica Viva GNSS GS08plus, Leica Sprinter 250M digital level.
- Write like an experienced engineer explaining to a client: plain words, short paragraphs, concrete site examples. Explain jargon the first time.
- Romanian is the original; English and German are natural translations, not word-for-word.
- Use "dumneavoastră" in Romanian, "you" in English and "Sie" in German.
- No invented statistics, prices, client names, project details or quotes. Only mention Road Consult's real projects (Dumbrăvița, Săravale, Biled, Arad county) in general terms already on the site.
- Do not state specific laws, norms or legal deadlines unless you are certain they are current; prefer "check the current norms" over a wrong citation.
- No clickbait. Titles say what the reader will learn.

## Shape

- 500 to 900 words.
- Open with the situation on site, in the reader's terms.
- Use `##` headings for the main points, `###` only if needed.
- End with a short summary and one sentence inviting the reader to get in touch. The page adds the contact form itself.
- Link to a service page when relevant: `/servicii/masuratori-topografice/`, `/servicii/planificare-coordonare/`, `/servicii/consultanta-tehnica/` (EN: `/en/services/topographic-surveys/`, `/en/services/planning-coordination/`, `/en/services/technical-consulting/`; DE: `/de/leistungen/vermessung/`, `/de/leistungen/planung-koordination/`, `/de/leistungen/technische-beratung/`).

## Topics

Rotate between the three services: topographic surveys and setting out, planning and coordinating road works, technical consulting (offers, documentation, communication with the client). Prefer practical explainers and checklists ("what happens before the asphalt", "what a beneficiary should ask for"). Check `src/content/blog/` first so a topic isn't repeated.

## Before opening the pull request

- `npm run build` passes.
- All three languages exist and share the same `key`.
- Title and description are within the limits.
