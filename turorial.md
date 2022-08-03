## Como fazer um Pull Request

#### Passo 1 - Atualize o seu branch principal
- `git checkout main`
- `git pull origin main`

#### Passo 2 - Implementar as mudanças
Altere/crie/remova códigos conforme a issue solicita, teste e se tiver tudo ok avance pro passo 03

#### Passo 3 - Criar um novo branch
`git checkout -b nome-da-sua-branch`
Obs: O nome da sua branch deve conter no maximo 03 palavras separadas por "-" e resumir o que deve ser feito

#### Passo 4 - Adicionar o que foi modificado
`git add .`

#### Passo 5 - Commitar/Documentar as mudanças
`git commit -m "Aqui voce descreve em uma frase o que mudou"`

#### Passo 6 - Enviar a suas alterações
`git push origin nome-da-sua-branch`

#### Passo 7 - Abrir o pull request
Acesse o link que o apareceu no terminal com o termo `new` e finalize a abertura do pull request.

#### Pronto, escolha uma nova task e faça tudo de novo