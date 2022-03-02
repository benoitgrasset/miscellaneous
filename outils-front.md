# Outils front

## IDE

2 IDEs (au choix) sont utilisés par l'équipe front: Visual Studio Code ou IntelliJ IDEA.
La dernière version de Visual Studio Code se trouve [ici](https://code.visualstudio.com/download), celle de IntelliJ IDEA [ici](https://www.jetbrains.com/fr-fr/idea/download/#section=mac).


## VSCode extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)


## Configuration de Git avec VS Code

Pour que VS Code soit le diff tool par défaut:
```
    git config --global core.editor "code --wait"
    git config --global -e
```
Il faut ensuite ajouter les lignes suivantes au fichier .gitconfig:
```
    [diff]
        tool = default-difftool
    [difftool "default-difftool"]
        cmd = code --wait --diff $LOCAL $REMOTE
```

Pour automatiquement nettoyer les objets Git du répertoire local à chaque fetch depuis le repertoire distant:
```
    git config --global fetch.prune true
```