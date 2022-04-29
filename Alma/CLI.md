#### .bashrc

```
if [ -z "$(pgrep ssh-agent)" ]; then
   rm -rf /tmp/ssh-*
   eval $(ssh-agent -s) > /dev/null
else
   export SSH_AGENT_PID=$(pgrep ssh-agent)
   export SSH_AUTH_SOCK=$(find /tmp/ssh-* -name agent.*)
fi
```


#### print SSH agent
```
eval "$(ssh-agent -s)"
```
#### add SSH agent
```
ssh-keygen -t ed25519 -C "benoit.grasset@getalma.eu"
ssh-add ~/.ssh/id_ed25519
```
#### add in SSH and GPG keys section in github settings
```
cat ~/.ssh/id_ed25519.pub
```

#### set read and write permission
```
chmod 600 /mnt/c/Users/benoi/.ssh/id_ed25519
```

####  read and execute the content of a file
```
source ~/.bashrc
```

#### historique des commandes
```
~/.bash_history
```

#### open shell config files
```
code ~/.zshrc
```
```
code ~/.bashrc
```

#### install docker compose previous version
```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```
