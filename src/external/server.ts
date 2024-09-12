/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable no-console */
import 'reflect-metadata';

import '@external/envConfig';

import { app } from './app';
import { dbDataSource } from './database/dbConfig';

// ---------------------------------------------------- //

const PORT = process.env.PORT || 5000;

dbDataSource.initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
