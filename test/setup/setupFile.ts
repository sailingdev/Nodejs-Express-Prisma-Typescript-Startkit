import mongoose from 'mongoose';
import Logger from '@btcsinc/logger';
import config from './config';

beforeAll(async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/${config.DataBase}`, {});
  Logger.createLogger('', mongoose.connection.db);
});

afterAll(async () => {
  await mongoose.disconnect();
});
