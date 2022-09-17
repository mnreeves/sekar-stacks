import { UsersTable } from "../models/users_table";

export default async function usersService() {
  const users = await UsersTable.findAll({
    raw: true
  });

  return users;
}