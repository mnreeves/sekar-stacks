import { sequelizeConnection } from './../utils/bootstrap_database_authenticate';
import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class OrdersTable extends Model<InferAttributes<OrdersTable>, InferCreationAttributes<OrdersTable>> {
  declare orderId: CreationOptional<number>;
  declare userId: number;
}


export default function setupOrdersTable() {
  OrdersTable.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize: sequelizeConnection,
      timestamps: false,
      underscored: true,
      tableName: 'sekar_orders'
    }
  );

  OrdersTable.sync();
}