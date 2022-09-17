import bootstrapDatabaseAuthenticate from "./bootstrap_database_authenticate";

export default async function BootstrapDatabase() {
  await bootstrapDatabaseAuthenticate();
}
