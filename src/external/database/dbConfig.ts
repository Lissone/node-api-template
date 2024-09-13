import { DataSource } from 'typeorm';

import { UserEntity } from './entities/User';

// ---------------------------------------------------- //

const { POSTGRESQL_HOST, POSTGRESQL_PORT, POSTGRESQL_USERNAME, POSTGRESQL_PASSWORD, POSTGRESQL_DATABASE } = process.env;

export const dbDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRESQL_HOST,
  port: POSTGRESQL_PORT || 5432,
  username: POSTGRESQL_USERNAME,
  password: POSTGRESQL_PASSWORD,
  database: POSTGRESQL_DATABASE,

  synchronize: true,
  logging: false,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});
