import { sequelize } from './models.js';

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database Tables Created Successfully!");
    process.exit();
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();