import path from 'path';
import dotenv from 'dotenv';
dotenv.config();


export interface Config {
    port: number | string;
    databaseStorage: string;
    nodeEnv: string;
    logLevel: string;
}

const config: Config =  {
  port: process.env.PORT || 5000,
  databaseStorage: process.env.DATABASE_STORAGE || path.join(__dirname, '../database.sqlite'),
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
};

export default config;