import { OrdersTable } from "./orders_table";
import { UsersTable } from "./users_table";


export default function setupRelationUserAndOrder() {
  UsersTable.hasMany(OrdersTable, {
    as: 'Orders',
    foreignKey: 'userId'
  });

  OrdersTable.belongsTo(UsersTable, {
    as: 'Users',
    foreignKey: 'userId'
  });
}
