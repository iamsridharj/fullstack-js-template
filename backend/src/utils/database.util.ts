import { Sequelize } from 'sequelize';
import config from 'src/configs/base.config';
import initModels from "@models/index";
import logger from "@utils/logger.util"

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.databaseStorage,
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connection has been established successfully.');
    initModels(sequelize);
    await sequelize.sync();
    logger.info('Database synchronized successfully.');

  } catch (error) {
    logger.error('Unable to connect to the database: %o', error);
    process.exit(1); 
  }
};


export { sequelize, connectToDatabase };
