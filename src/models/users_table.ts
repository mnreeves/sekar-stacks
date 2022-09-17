import { sequelizeConnection } from './../utils/bootstrap_database_authenticate';
import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class UsersTable extends Model<InferAttributes<UsersTable>, InferCreationAttributes<UsersTable>> {
  declare userId: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare password: string;
}


export default function setupUsersTable() {
  UsersTable.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize: sequelizeConnection,
      timestamps: false,
      underscored: true,
      tableName: 'sekar_users'
    }
  );

  UsersTable.sync();
}