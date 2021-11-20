<h1 align="center">
  Simple node api template with CRUD
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/simple-node-api-template" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/simple-node-api-template" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/simple-node-api-template" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/simple-node-api-template" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/simple-node-api-template" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/simple-node-api-template" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/simple-node-api-template/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/simple-node-api-template/issues">Request feature</a>
</p>

<br />

## Description

Template made in Typescript with Express and structured with an architecture based on clean and ddd, to facilitate the creation of new projects and developer productivity, which can be created from this one.

Already configured with Typescript, ESLint, Prettier, Nodemon and Mongoose, with a pre-built CRUD and fully documented markdown architecture.

### Requirements

- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Nodejs](https://nodejs.org/en/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Technologies

- NodeJs
- Typescript
- Express
- Nodemon
- Mongoose
- Eslint (airbnb-config with another pessoal rules)
- Prettier

### Endpoints

<strong>Base url: </strong>https://localhost:5000/api/v1

![GET](https://img.shields.io/badge/-GET-70BB60?style=for-the-badge)&nbsp;
/user

![GET](https://img.shields.io/badge/-GET-70BB60?style=for-the-badge)&nbsp;
/user/:email

![POST](https://img.shields.io/badge/-POST-2991B8?style=for-the-badge)&nbsp;
/user

![PUT](https://img.shields.io/badge/-PUT-99768C?style=for-the-badge)&nbsp;
/user/:email

![DELETE](https://img.shields.io/badge/-DELETE-DF807E?style=for-the-badge)&nbsp;
/user/:email

### Usage

You can use this project as a template for another one, or clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/simple-node-api-template.git
cd simple-node-api-template
```

Install dependencies using:

```bash
yarn
#or
npm install
```

### Database configuration

You must create the database before running an api (dataBase).

```typescript
// .\src\external\database\dbConfig.ts

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

Need to add environment variables:

```bash
# .\.env

# DEFAULT
PORT=5000

# DATABASE
DB_USERNAME=sa
DB_PASSWORD=123456
DB_NAME=dataBase
DB_URI=mongodb://localhost
```

Run api:

```bash
yarn dev
#or
npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
