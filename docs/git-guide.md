# Git Guide

[[toc]]

## How to add more code to the project

### 1. Create a branch

On your fork, create a new branch from the latest upstream "master" branch commit of the repository you need to work on.
We do not enforce any particular branch naming policy, but we recommend using task ID or prefix, like `fix`, `feature` or `improvement`, for example.

### 2. Development and Pull Request

Work on your local repository as you see fit. When the time comes to make the PR, rearrange your commits to improve its readability: squash similar or related changes into individual commits and try to keep the overall commit count at a minimum.

### 3. Code review and requested changes

- [Read more about Vivify Ideas Code Review](/)

After a code review, add the requested changes in a new commit. This is useful because it's possible to check again only the specific changes that the reviewer requested. When your PR is approved, rearrange all the commits to have a descriptive history of your changes. Also rebase with master branch.

#### 3.1 Avoiding cascading delays when submitting PRs that depend on one another

If you want to submit several PRs that depend on one another and you don't want to wait for the revisions of the former to submit the latter, you can, as an exceptional measure, submit them without waiting to rebase them against master, so each of them will depend on the changes of the previous ones.

Always add a comment to the Pull Request indicating that it depends on other PRs that must be merged first.
