---
number: 2
title: Learning by Rebuilding
date: 2026-07-08
summary: Why returning to an old project can teach more than starting another one from scratch.
---

Starting a new project is exciting. The structure is clean, every decision feels intentional, and there is no old code waiting to disagree with you.

Rebuilding an existing project is different. It forces me to look at decisions I made months ago and ask whether they still make sense.

That is usually where the more useful learning begins.

When I return to an old project, I can see the gap between what I understood then and what I understand now. A component may work perfectly well but have too many responsibilities. A folder structure may reflect the order in which features were added rather than the way the product actually works. A small visual inconsistency may reveal that the design system was never clearly defined.

The goal is not to rewrite everything just because I can.

A rebuild is useful when it answers specific questions:

- Can the structure become easier to navigate?
- Can repeated behaviour be expressed once?
- Can a feature be removed instead of made more configurable?
- Can the interface communicate its purpose with less explanation?
- Can another developer understand the code without reconstructing my original thought process?

I often begin by removing things. Old abstractions, unused components, unnecessary routes, duplicated styles, or features that no longer fit the product can make a project feel more complicated than it really is.

Only after that do I decide what should be rebuilt.

This process also makes progress easier to notice. When learning through a new project, it is difficult to separate improvement from novelty. When rebuilding something familiar, the comparison is direct. I know how the previous version behaved, where it became awkward, and which decisions caused friction.

The result does not always need to look dramatically different. Sometimes the biggest improvements are less visible:

- clearer names;
- smaller responsibilities;
- fewer dependencies;
- more predictable data flow;
- better mobile behaviour;
- simpler validation;
- code that is easier to delete later.

Rebuilding has also taught me that _cleaner_ does not always mean _more abstract_. A reusable solution is valuable when it reflects a real pattern. Creating layers for possibilities that may never exist usually makes the current feature harder to understand.

> The best rebuild is not the one that changes the most. It is the one that makes the project easier to continue.

I still enjoy starting from an empty repository. But returning to something unfinished, overcomplicated, or simply older often teaches me more. It turns past decisions into concrete examples—and gives me the chance to make better ones for reasons I can now explain.
