#### skip single file from git worktree (already committed)
```
git update-index --skip-worktree file.html
git update-index --no-skip-worktree file.html
```

#### force to quit git rebase
```
git rebase --quit
```

```
git pull --rebase
```

```
git config --global fetch.prune true
```

git pull = git fetch && git merge


#### hooks - husky

```
pre-commit
```
```
post-merge
```
lint-staged, commitlint, git-precommit-checks
