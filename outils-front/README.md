# Outils front

## Navigateur

Au choix, la plupart dans l'équipe utilisent [google chrome](https://www.google.com/intl/fr/chrome/), avec les extensions suivantes:

- [Authenticator](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg)
- [uBlock](https://chrome.google.com/webstore/detail/ublock-free-ad-blocker/epcnnfbjfcgphgdmggkamkmgojdagdnn)
- [Pop up blocker for Chrome](https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche)
- [fck-overlays](https://chrome.google.com/webstore/detail/fck-overlays/ppedokobpbdajgiejhnjfbdjlgobcpkp)
- [Refined Github](https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf?hl=en)
- [Grammarly](https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en-US) (pre-release version)
- [1password](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=fr)
- [Hide YouTube Shorts](https://chrome.google.com/webstore/detail/hide-youtube-shorts/aljlkinhomaaahfdojalfmimeidofpih/related)
- [Honey: Automatic Coupons & Rewards](https://chrome.google.com/webstore/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj?hl=fr)
- [web developer tools](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=fr)

## IDE

2 IDEs (au choix) sont utilisés par l'équipe front: Visual Studio Code ou IntelliJ IDEA.
La dernière version de Visual Studio Code se trouve [ici](https://code.visualstudio.com/download), celle de IntelliJ IDEA [ici](https://www.jetbrains.com/fr-fr/idea/download/#section=mac).


## VSCode extensions

- [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [Glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)
- [Template string converter](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [GitLive](https://marketplace.visualstudio.com/items?itemName=TeamHub.teamhub)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [GiHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [Remote WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [ChatGPT VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=JayBarnes.chatgpt-vscode-plugin)
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [pretty-ts-errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

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

Pour appliquer les corrections ESLint partout:
```
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.organizeImports": true
    },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

**Settings**
- Preferences -> Settings -> Files: Insert Final Newline

## Storybook

Storybook est une bibliothèque qui permet de regrouper tous nos composants dans une sandbox, isolés du reste de l'application. On y décrit chaque composant avec ses différentes props. C'est un outil à la fois de tests et de documentation qui permet de faire le lien entre les développeurs et les designers.
````
    yarn run storybook
````

## Chromatic

Chromatic is a cloud-based toolchain for Storybook that helps teams ship UI components faster. It’s made by the team behind Storybook. Chromatic automates UI testing and review.
https://www.chromatic.com/docs/

```
yarn add --dev chromatic
npx chromatic --project-token=329568dabebe
```

```
name: Chromatic

on:
  push:
    branches: [develop, main]

jobs:
  chromatic:
    runs-on: ubuntu-latest
    with:
        fetch-depth: 0
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: yarn
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          onlyChanged: true
          
 ```

## Autres outils

- [Homebrew](https://brew.sh/index_fr) un gestionnaire de paquets pour macos (brew command)
- [N](https://formulae.brew.sh/formula/n) un gestionnaire de versions pour Node.js
- [nvm](https://github.com/nvm-sh/nvm) Node Version Manager
- [Node.js](https://nodejs.org/en/) le fameux runtime javascript

- [create-t3-app](https://create.t3.gg/) boilerplate to start a full-stack, typesafe Next.js app

Pour garantir le bon fonctionnement des tests, il faut ajouter le locale dans le fichier config de la shell :
````
    echo -n 'export LANG=en_US.UTF-8' >> ~/.zshrc
````
- [oh-my-zsh](https://ohmyz.sh/#install) un outil permettant de manager simplement Zsh, la shell Unix par défaut sur macos
- [iterm2](https://iterm2.com/downloads.html) un terminal enrichi pour macos
- [Postman](https://www.postman.com/downloads/) une plateforme pour tester son API REST
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) une alternative de Postman directement dans VSCode
- [maccy](https://maccy.app/) Clipboard manager for macOS
- [ubar](https://brawersoftware.com/products/ubar) The Dock replacement for the Mac

- **BDD**: DBeaver, PGAdmin
- **Audio**:  Pavucontrol (PulseAudio VolUme Control)
- **ABTesting**: Kameleoon
- **Son**: NoiseTorch
- HTop, Pop meetings
