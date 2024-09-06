declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;

    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_URI: string;
  }
}
