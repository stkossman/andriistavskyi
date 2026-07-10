---
title: Tools I Keep Using
date: 2026-07-08
summary: The tools I return to are usually the ones that make ordinary work easier to keep moving.
---

The tools I keep are not necessarily the most impressive ones. They are the ones that let me move from an idea to a dependable result without creating a pile of special cases along the way.

For this site, [Astro](https://astro.build) is a good example. It keeps the default close to static HTML while still making it straightforward to add the small amount of interaction the index needs. That fits a portfolio well. Most of the content should arrive already rendered, and the browser should only take on work when there is a real reason for it.

TypeScript is another tool I reach for because it makes small systems easier to revisit. A portfolio has fewer moving parts than an application, but it still has routes, content, project data, and UI state. Keeping those boundaries explicit makes a later change less speculative. I can see what a project entry contains, what a route expects, and where a label comes from before changing it.

Tailwind works well for this kind of interface because the decisions stay close to the markup. The visual system here is deliberately narrow: a warm background, a few text colors, subtle borders, and compact spacing. Utility classes make it easier to keep those choices consistent without inventing a large component layer for a small site.

Bun is mostly a practical choice in this project. It keeps package installation and local scripts in one familiar loop. The important part is not the runtime label; it is that the workflow stays quick enough that `format`, `lint`, and `build` are ordinary checks rather than something to postpone.

Version control belongs to the same working rhythm. When I need to inspect or tidy a short branch, these are the commands I want to be able to read without reaching for another interface:

```bash
git log --oneline -5
git commit -m "describe the change"
git rebase -i HEAD~3
```

I also like local font packages for a site like this. IBM Plex Sans and Geist Mono can be loaded without depending on a third-party font request at page load. That keeps the typography predictable and lets the prose and index metadata have distinct roles.

None of these tools is a universal answer. I keep using them because they reduce friction in the kind of work I am doing: building small, maintainable interfaces that are clear in the browser and clear in the codebase.
