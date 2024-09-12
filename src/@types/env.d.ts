declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;

    POSTGRESQL_HOST: string;
    POSTGRESQL_PORT: number;
    POSTGRESQL_USERNAME: string;
    POSTGRESQL_PASSWORD: string;
    POSTGRESQL_DATABASE: string;
  }
}
