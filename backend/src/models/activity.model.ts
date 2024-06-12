import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface ActivityAttributes {
  id?: number;
  title: string;
  price: number;
  currency: string;
  rating?: number;
  special_offer?: boolean;
  supplier_name: string;
  location: string;
}

interface ActivityCreationAttributes extends Optional<ActivityAttributes, 'id'> {}

class Activity extends Model<ActivityAttributes, ActivityCreationAttributes> implements ActivityAttributes {
  public id!: number;
  public title!: string;
  public price!: number;
  public currency!: string;
  public rating!: number;
  public special_offer!: boolean;
  public supplier_name!: string;
  public location!: string;
}

const initActivity = (sequelize: Sequelize): typeof Activity => {
  Activity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      special_offer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      supplier_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Activity',
      indexes: [{ fields: ['title'] }],
    }
  );

  return Activity;
};

export { Activity, initActivity, ActivityAttributes, ActivityCreationAttributes };
