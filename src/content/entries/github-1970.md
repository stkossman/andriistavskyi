---
number: 1
title: A GitHub 1970 Experiment
date: 2026-07-09
summary: A small commit-history experiment, with the limits of profile attribution kept in view.
---

Git commits carry more than a message and a diff. They also carry an author date and a committer date. I wanted to understand what happens when those dates are deliberately historical, so I made a small empty commit dated at the start of 1970.

The point was not to make a repository look older than it is. It was to see how a familiar tool treats metadata when it is outside the normal range of day-to-day work. A date is part of the record, and Git is quite literal about preserving the value it receives. That distinction is **important**: a timestamp is data, not a claim about the age of the work.

To make the experiment explicit, I set both timestamps. The `--date` flag controls the author date, while `GIT_COMMITTER_DATE` keeps the committer date aligned with it.

```bash
GIT_AUTHOR_DATE="1970-01-01T00:00:00Z" \
GIT_COMMITTER_DATE="1970-01-01T00:00:00Z" \
git commit --allow-empty --date="1970-01-01T00:00:00Z" -m "A dated commit"

git log --format=fuller -1
git push
```

After creating it, I checked three things:

1. Git stored the author and committer timestamps I expected.
2. The commit remained intact after pushing to the remote.
3. Any profile display was treated as a separate GitHub concern, not evidence that the commit had been made in 1970.

GitHub decides what it attributes to an account and what it surfaces on a profile. Repository visibility, the commit email, the branch, and GitHub's own contribution rules can all affect that outcome. The local commit is the part I can inspect directly; a profile display is an observation on top of it. The experiment is *deliberately narrow* for that reason.

> A historical timestamp is metadata, not proof of historical work.

---

I like this kind of small experiment because it makes an ordinary command less opaque. `git commit` usually feels like a single action, but it is really a record with several fields and a set of rules around how other tools interpret them. Looking at those fields directly is more useful than treating the profile result as magic.
