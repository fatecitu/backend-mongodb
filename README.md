# 🚀Backend Node.js integrado ao Mongodb
>> Projeto criado na aula de Laboratório de Banco de Dados

## 🗝️Informações Básicas
É necessário adicionar a chave abaixo no seu arquivo ```package.json```
```json
{ "type": "module" }
```
## 💡Dicas
- Clone o projeto
- Renomeie o arquivo .env-example para .env e informe a sua string de conexão ao MongoDB
- Instale as dependências com ```npm i```
- Abra o Terminal no VSCode e informe ```npm run dev```

## 📦Packages Utilizados
```
npm i express
npm i mongodb@4.2
npm i dotenv
npm i nodemon --dev
npm i express-validator
```

## 📝Função de cada um dos pacotes
<table><thead><tr><th>Pacote</th><th>Descrição</th></tr></thead><tbody><tr><td><code>express</code></td><td>Framework web rápido, flexível e minimalista para Node.js.</td></tr><tr><td><code>mongodb</code></td><td>Driver oficial do MongoDB para Node.js.</td></tr><tr><td><code>dotenv</code></td><td>Carrega variáveis ​​de ambiente do arquivo .env para o processo.env.</td></tr><tr><td><code>cors</code></td><td>Middleware que permite a comunicação entre diferentes domínios na web.</td></tr><tr><td><code>express-validator</code></td><td>Middleware para validação de dados de entrada em solicitações HTTP.</td></tr><tr><td><code>nodemon</code> (dev)</td><td>Ferramenta que monitora as alterações no código-fonte e reinicia automaticamente o servidor.</td></tr></tbody></table>

## 🎯Efetuando o Deploy do Backend no Vercel
- Defina a chave _engines_ no fim do arquivo ```package.json```, conforme exemplo a seguir:
```json
 "engines": {
    "node": "16.x",
    "npm": "9.x"
  }
```
- Dentro da chave scripts do arquivo ```package.json``` defina o start:
```json
"scripts": {
    "start": "node ./api/index.js",
```    
- Crie na pasta raiz um arquivo chamado ```vercel.json``` com o conteúdo a seguir:
```json
{
    "version": 2,
    "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]    
}
```
- Acesse o (Vercel)[https://vercel.com/login] e faça o login com a sua conta do Github
- Importe o projeto desejado que será exibido na lista do Github
- Na área de Environment Variables, recorte e cole o seu arquivo .env
- Clique em Deploy e apaixone-se ♥️😃 pelo Vercel 
- A cada novo push no seu repositório GIT ele automaticamente fará novamente o deploy.👏👏
