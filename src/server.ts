import 'express-async-errors';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import V1Router from './v1/routes';
import { errorHandler, notFound } from './v1/middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(helmet());
}

app.use('/api/v1', V1Router);
app.use(errorHandler);
app.use(notFound);

export default app;
