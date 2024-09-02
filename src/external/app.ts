import cors from 'cors';
import express from 'express';

import { apiRoutes } from './routes';

// ---------------------------------------------------- //

export const app = express();

app.disable('x-powered-by');

const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: true,
};

app.use(express.json());
app.use(cors(options));

app.use(apiRoutes);

app.get('/', (_, res) => {
  res.send({ message: 'API' });
});
