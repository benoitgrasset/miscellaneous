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

#### install docker compose previous version (Linux Standalone Library)
```
curl -SL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Use a self signed certificate
```
sudo apt install libnss3-tools
sudo apt install mkcert
mkcert -install
mkdir -p .cert
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"
```

#### restart chrome
```
chrome://restart
```

#### install .deb package
```
sudo dpkg -i package_file.deb
```

#### kill process on port 3000
```
sudo kill -9 $(sudo lsof -t -i:3000)
```

#### run payment page on port 3000
add the following command line on "me.env" file (main)
```
CHECKOUT_PAYMENT_PAGE_URL="https://localhost:3000/{}"
```

#### use a specific node version
```
nvm use 16.13.2
```

#### List all vs code extensions
```
code --list-extensions
```

#### Display what the tests look like
```
screen.logTestingPlaygroundURL(document.body)
```

#### Get the location of an executable
```
which node nodejs
```

#### Slack
```
/assist
```

#### Tags admin
```
id_verif:new_page | id_verif:old_page
```
```
feature:new_payment_page
```
```
feature:sepa_payment_method
```
```
feature:new_b2b_kyc
```
```
feature:bancontact_payment_method
```
