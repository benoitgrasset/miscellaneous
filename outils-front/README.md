# Outils front

## Navigateur

Au choix, la plupart dans l'équipe utilisent [google chrome](https://www.google.com/intl/fr/chrome/), avec les extensions suivantes:

- [Authenticator](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg)


## IDE

2 IDEs (au choix) sont utilisés par l'équipe front: Visual Studio Code ou IntelliJ IDEA.
La dernière version de Visual Studio Code se trouve [ici](https://code.visualstudio.com/download), celle de IntelliJ IDEA [ici](https://www.jetbrains.com/fr-fr/idea/download/#section=mac).


## VSCode extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [Glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)
- [Template string converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)


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

## Storybook

Storybook est une bibliothèque qui permet de regrouper tous nos composants dans une sandbox, isolés du reste de l'application. On y décrit chaque composant avec ses différentes props. C'est un outil à la fois de tests et de documentation qui permet de faire le lien entre les développeurs et les designers.
````
    yarn run storybook
````

## Autres outils

- [Homebrew](https://brew.sh/index_fr) un gestionnaire de paquets pour macos
- [N](https://formulae.brew.sh/formula/n) un gestionnaire de versions pour Node.js

Attention pour les utilisateurs de Homebrew : Un `brew update / brew upgrade` automatiquement met à jour toutes les paquets et une dependance actuelle du portail (node-gyp) nous empêche d'utiliser les versions de node superieur à 14.X.X. Car, avec `n`, c'est possible de pinner une version de node, p.e. :
````
    n 14.17.0
````
- [Node.js](https://nodejs.org/en/) le fameux runtime javascript

Pour garantir le bon fonctionnement des tests, il faut ajouter le locale dans le fichier config de la shell :
````
    echo -n 'export LANG=en_US.UTF-8' >> ~/.zshrc
````
- [oh-my-zsh](https://ohmyz.sh/#install) un outil permettant de manager simplement Zsh, la shell Unix par défaut sur macos
- [iterm2](https://iterm2.com/downloads.html) un terminal enrichi pour macos
- [Postman](https://www.postman.com/downloads/) une plateforme pour tester son API REST
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) une alternative de Postman directement dans VSCode