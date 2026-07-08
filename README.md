# Open HIPAA

Open, plain-language HIPAA answers and reference architectures — built for
humans and AI agents.

- **One question per page**, answered directly, GotQuestions-style.
- **Reference architectures** for HIPAA-compliant setups, with data-flow
  diagrams.
- **Agent-friendly by design**: FAQPage/TechArticle JSON-LD on every page, an
  [llms.txt](https://llmstxt.org) index, a full-content dump at
  `/llms-full.txt`, and a raw-markdown mirror of every page (append `.md` to
  any URL).

## Stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build).
Content lives as markdown files — the framework is a rendering detail.

```
src/content/docs/questions/       one .md file per question
src/content/docs/architectures/   one .md file per architecture
public/widgets/                   self-contained HTML interactives (iframed)
```

## Authoring

```markdown
---
title: "The question, phrased how people actually ask it?"
description: "The direct answer in one or two sentences. This becomes the structured-data answer that AI assistants lift — it must stand alone."
tags: [topic-one, topic-two]
lastUpdated: 2026-07-08
---

The expanded answer. Then nuance, exceptions, citations.
```

- Tags auto-generate `/topics/<tag>/` hub pages. No hierarchy; URLs are flat
  and permanent.
- Plain `.md` by default. Rename to `.mdx` only to embed components
  (`<YouTube id="..."/>` from astro-embed, `<Widget src="/widgets/x.html"/>`
  for self-contained HTML interactives).
- ```` ```mermaid ```` code fences render as diagrams client-side.

## Development

```sh
npm install
npm run dev      # localhost:4321
npm run build    # static output in dist/
```

## License

- Code: [MIT](./LICENSE)
- Content (`src/content/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Maintained by [HIPAA Made Simple](https://hipaamadesimple.io). Educational
reference material, not legal advice.
