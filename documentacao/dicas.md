# Dicas

## Gitignore

  Para criar um novo gitignore utilize o comando no terminal do BASH:

`touch .gitignore`

  Sempre que colocar um arquivo no gitignore confira se ele realmente está sendo ignorado;

`git status`

  Se você deseja ignorar um arquivo que já foi ingressado, você deve cancelar o rastreamento do arquivo antes de adicionar uma regra para ignorá-lo. 
No seu terminal, deixe de rastrear o arquivo:

`git rm --cached FILENAME`

  Saiba mais em [ATLASSIAN GITIGNORE](https://www.atlassian.com/br/git/tutorials/saving-changes/gitignore) e/ou [GITHUB GITIGNORE](https://docs.github.com/pt/get-started/getting-started-with-git/ignoring-files) e/ou 