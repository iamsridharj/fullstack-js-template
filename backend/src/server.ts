import { Server } from 'http';

import logger from '@utils/logger.util';
import {connectToDatabase} from "@utils/database.util"
import config from "@configs/base.config";
import app from 'src/app';


const PORT = config.port;
let server: Server;

const startServer = async () => {
  try {
    await connectToDatabase()
    server = app.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server: %o', error);
    process.exit(1); 
  }
};

const shutdownServer = async () => {
  try {
    if (server) {
      await new Promise<void>((resolve, reject) => {
        server.close(err => {
          if (err) reject(err);
          else resolve();
        });
      });
      logger.info('Server closed successfully.');
    }
    process.exit(0);
  } catch (error) {
    logger.error('Failed to close server: %o', error);
    process.exit(1); 
  }
};

process.on('SIGTERM', shutdownServer);
process.on('SIGINT', shutdownServer);


startServer();
