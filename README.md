<h1 align="center">
  Node Express API Template
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
  <img src="https://img.shields.io/github/repo-size/Lissone/node-api-template" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/node-api-template" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/node-api-template" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/node-api-template" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/node-api-template" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/node-api-template" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/node-api-template/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/node-api-template/issues">Request feature</a>
</p>

<br />

## Description

Template made in Typescript with Express and structured with an architecture based on clean and DDD, to facilitate the creation of new projects and developer productivity, which can be created from this one.

Already configured with Typescript, ORM, Linter and Husky, with a pre-built CRUD and endpoints listed in the documentation.

### Requirements

- [Nodejs](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### Technologies

- NodeJs
- Typescript
- Express
- TypeORM
  - PostgreSQL
- Yup
- Eslint
  - @lissone/eslint-config/node
- Commitlint
  - config-conventional
- Husky

### Endpoints

<strong>Base url: </strong>https://localhost:5000/api/v1

![GET](https://img.shields.io/badge/-GET-70BB60?style=for-the-badge)&nbsp;
/user

![GET](https://img.shields.io/badge/-GET-70BB60?style=for-the-badge)&nbsp;
/user/:email

![POST](https://img.shields.io/badge/-POST-2991B8?style=for-the-badge)&nbsp;
/user

![PATCH](https://img.shields.io/badge/-PATCH-99768C?style=for-the-badge)&nbsp;
/user/:email

![DELETE](https://img.shields.io/badge/-DELETE-DF807E?style=for-the-badge)&nbsp;
/user/:email

### Usage

You can use this project as a template for another one, or clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/node-api-template.git
cd node-api-template
```

Install dependencies using:

```bash
npm install
```

Need to add environment variables:

```bash
# .\.env

# APP
PORT=5000

# POSTGRESQL
POSTGRESQL_HOST=localhost
POSTGRESQL_PORT=5432
POSTGRESQL_USERNAME=docker
POSTGRESQL_PASSWORD=docker
POSTGRESQL_DATABASE=exampledb
```

You must have **Docker installed** on your machine to get the container up.
**Up PostgreSQL service** in a **Docker container** on your local machine using:

```bash
docker-compose up -d
# View all running containers
docker ps
```

Run api:

```bash
npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
