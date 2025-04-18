## Git config

```
git config --global -e
```

https://blog.gitbutler.com/how-git-core-devs-configure-git/

#### skip single file from git worktree (already committed)
```
git update-index --skip-worktree file.html
git update-index --no-skip-worktree file.html
```

#### change capitalization of filenames in Git:
```
git mv --force src/components/CheckBoxWithLabel.tsx src/components/CheckboxWithLabel.tsx
```

#### force to quit git rebase
```
git rebase --quit / --abort
```

```
git pull --rebase
```

```
git config --global fetch.prune true
git fetch -p
```

**git pull** = git fetch && git merge

git pull --rebase / --merge / --ff / --no-ff / --squash

git merge --squash: un seul commit de merge

**ff** = fast forward (only update the branch pointer to match the merged branch; do not create a merge commit)

#### Useful commands

repasser en staging area:
```
git reset HEAD~1
```
supprimer le dernier commit:
```
git reset --hard HEAD~1
```
modifier le dernier commit, le repasser dans la staging area:
```
git commit --amend
```
drop un commit:
```
git rebase -i HEAD~X / drop
```

**reset**: la branche diverge, à utiliser localement, réinitialiser l'historique de commits, supprime les derniers commits

**revert**: creer un nouveau commit qui annule le dernier commit <id_commit>

supprimer les fichiers non trackés:
```
git clean
```
supprimer un fichier d'un dépot git:
```
git rm
```

specifique branche d'un package npm:
```
"highcharts-react-official": "highcharts/highcharts-react#426-typescript-5.2.2-fix"
```

figer la mineur:
```
"typescript": "~5.1.6"
```

**submodules**

```
git submodule update --init --recursive
```

## Github bots

- [Dependabot](https://github.com/dependabot)
- [Snyk](https://snyk.io/)
- [Renovate](https://github.com/renovatebot/renovate)
- [kodiakhq](https://kodiakhq.com/)
- [semantic release](https://github.com/semantic-release/semantic-release)
- [gh submit queue](https://github.com/cirruslabs/gh-submit-queue)

## Static code analysis

- https://about.codecov.io/
- https://www.codechecks.io/
- https://sonarcloud.io/projects
- https://semgrep.dev/

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

### Github Actions / Gitlab CI/CD

- [act](https://github.com/nektos/act): Run your GitHub Actions locally

### Packages

- [yarn upgrade-interactive](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade-interactive/)
