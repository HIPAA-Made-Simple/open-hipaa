---
title: Contribute
description: How to suggest a question, fix an answer, or add a reference architecture to Open HIPAA.
---

Open HIPAA lives in a public GitHub repository:
[HIPAA-Made-Simple/open-hipaa](https://github.com/HIPAA-Made-Simple/open-hipaa).

## Ways to contribute

- **Suggest a question** — open an issue with the question you want answered.
- **Fix or improve an answer** — every page is a markdown file under
  `src/content/docs/`; edit it and open a pull request.
- **Add a reference architecture** — propose it in an issue first so we can
  agree on scope.

## Authoring format

One question = one markdown file:

```markdown
---
title: "The question, phrased how people actually ask it?"
description: "The direct answer in one or two sentences."
tags: [topic-one, topic-two]
lastUpdated: 2026-07-08
---

The direct answer, expanded. Then nuance, exceptions, and citations.
```

The `description` is load-bearing: it becomes the structured-data answer that
search engines and AI assistants lift, so it must stand alone as a correct
answer.
