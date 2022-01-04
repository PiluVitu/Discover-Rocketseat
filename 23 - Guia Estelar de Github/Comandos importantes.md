# Git Hub

## Chave SSH

> <span style="color:blue">_ssh-keygen -t rsa -b 4096 -C "mesmo email do github"_</span> usado para criar a chave ssh

> <span style="color:blue">_cat ~/.ssh/id_rsa.pub_</span> usado para pegar a chave ssh

### Ativando a chave

> <span style="color:blue">_$ eval `ssh-agent -s`_</span> 1 comando para ativar a chave ssh

> <span style="color:blue">_$ ssh-add ~/.ssh/id_rsa_</span> 2 comnado para ativar a chave ssh

> Guia para caso queira instalar em outro SO https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

> git remote add origin git@github.com:PiluVitu/Discover-Rocketseat.git
> git branch -M main
> git push -u origin main
