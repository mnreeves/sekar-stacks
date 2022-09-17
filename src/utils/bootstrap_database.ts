import bootstrapDatabaseAuthenticate from "./bootstrap_database_authenticate";
import bootstrapDatabaseTables from "./bootstrap_database_tables";

export default async function BootstrapDatabase() {
  await bootstrapDatabaseAuthenticate();
  bootstrapDatabaseTables();
}
