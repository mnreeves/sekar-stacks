import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'gorgeous',
  'root',
  'password',
  {
    dialect: 'mysql'
  }
);

export default async function bootstrapDatabaseAuthenticate() {
  try {
    await sequelize.authenticate();
    console.log('connection to database successfully authenticated');
  } catch (error: any) {
    console.log(`Error happened: ${error.message}`);
  }
}
