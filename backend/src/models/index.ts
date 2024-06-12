import { Sequelize } from 'sequelize';
import { readdirSync } from 'fs';
import { join } from 'path';

const initModels = (sequelize: Sequelize): void => {
  const modelsDir = __dirname;
  readdirSync(modelsDir).forEach((file) => {
    if (file !== 'index.ts' && file !== 'index.js') {
      const model = require(join(modelsDir, file));
      if (model.initActivity) {
        model.initActivity(sequelize);
      }
    }
  });
};

export default initModels;
