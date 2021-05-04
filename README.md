# simple_api_mongodb

Api simples em Typescript utilizando Express e Mongoose.
Estrutura de pastas mesclada com aspectos da clean architecture e DDD.

### Requerimentos

* [Yarn](https://yarnpkg.com/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Nodejs](https://nodejs.org/en/)

### Dependências

* Express
* Dotenv
* Nodemon
* Mongoose

### Endpoints

![Get](https://img.shields.io/badge/-GET-008000?style=for-the-badge)&nbsp;

### Instalando Dependencias

```bash
git clone https://github.com/Lissone/simple-api-mongodb.git
cd simple_api_mongodb
yarn
```

### Configurações do Banco de dados

```typescript
// .\src\config\dbConfig.ts

const DB_URI = process.env.DB_URI || 'mongodb://localhost'

const connection = mongoose.connect(DB_URI, {
  dbName: process.env.DB_NAME,
  // user: process.env.DB_USERNAME,
  // pass: process.env.DB_PASSWORD,
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```
É necessário criar o database no MongoDB antes de executar o projeto.

### Executar projeto

```
yarn dev
```
