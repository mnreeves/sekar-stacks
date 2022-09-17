import setupOrdersTable from "../models/orders_table";
import setupUsersTable from "../models/users_table";

export default function bootstrapDatabaseTables() {
  // Register Tables Here
  setupUsersTable();
  setupOrdersTable();
}
