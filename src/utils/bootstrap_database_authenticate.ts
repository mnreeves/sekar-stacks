import { Sequelize } from 'sequelize';

export const sequelizeConnection = new Sequelize(
  'gorgeous',
  'root',
  'password',
  {
    dialect: 'mysql'
  }
);

export default async function bootstrapDatabaseAuthenticate() {
  try {
    await sequelizeConnection.authenticate();
    console.log('connection to database successfully authenticated');
  } catch (error: any) {
    console.log(`Error happened: ${error.message}`);
  }
}
