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
git fetch -p
```

git pull = git fetch && git merge

## Github bots

- [Snyk](https://snyk.io/)
- [Dependabot](https://github.com/dependabot)
- [Renovate](https://github.com/renovatebot/renovate)
- [releasy]()

### husky

**pre-commit**
```
  npx tsc --noEmit --pretty
  npx lint-staged
```

**post-merge**

**other hooks**:

- [lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [commitizen](https://github.com/commitizen-tools/commitizen) (feat, fix, docs, style, refactor, perf, chore, revert, test, build, ci, ...)
- [git-precommit-checks](https://github.com/mbrehin/git-precommit-checks)
- [validate-branch-name](https://github.com/JsonMa/validate-branch-name)
