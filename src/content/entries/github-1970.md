---
number: 1
title: A GitHub 1970 Experiment
date: 2026-07-07
summary: A small experiment with Git timestamps and how GitHub interprets them.
---

A Git commit stores more than a message and a set of changes. It also records two timestamps: the **author date** and the **committer date**.

I wanted to see what would happen if both dates pointed to the very beginning of 1970. Not to pretend that the project was created decades ago, but simply to understand how Git stores historical metadata—and how GitHub chooses to display it.

I started from a separate branch so the experiment would not interfere with normal work:

```bash
git switch -c experiment/github-1970
```

Then I created an empty commit and explicitly set both timestamps to January 1, 1970:

```bash
GIT_AUTHOR_DATE="1970-01-01T00:00:00Z" \
GIT_COMMITTER_DATE="1970-01-01T00:00:00Z" \
git commit --allow-empty -m "chore: test historical commit date"
```

`GIT_AUTHOR_DATE` controls when the change is considered to have been authored. `GIT_COMMITTER_DATE` records when that exact commit object was created.

To inspect the result locally:

```bash
git show --no-patch --format=fuller HEAD
```

The output should contain both dates:

```text
AuthorDate: Thu Jan 1 00:00:00 1970 +0000
CommitDate: Thu Jan 1 00:00:00 1970 +0000
```

After confirming the metadata, I pushed the test branch:

```bash
git push -u origin experiment/github-1970
```

At this point, the commit exists on GitHub—but that does not automatically mean it will appear in the profile contribution graph.

GitHub applies its own attribution rules. Among other things, the commit email must be connected to the account, and the commit generally needs to reach the repository’s default branch or `gh-pages` branch. Private-repository visibility settings can also affect what appears publicly.

That means there are two separate results:

1. **Git preserves the historical timestamp.**
2. **GitHub decides whether and where to display the commit.**

> A timestamp is part of a commit’s metadata, not proof that the work was created at that time.

This was a small experiment, but it made the structure of a commit easier to understand. A command such as `git commit` feels like one action, while the resulting record contains several independent fields that other tools may interpret differently.
