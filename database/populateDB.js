import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize, Author, Book } from './models.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const populateDB = async () => {
  try {
    await sequelize.sync({ force: true });

    const dataPath = path.join(__dirname, "data.json");

    const rawData = fs.readFileSync(dataPath);
    const jsonData = JSON.parse(rawData);

    await Author.bulkCreate(jsonData.authors);
    await Book.bulkCreate(jsonData.books);

    console.log("Database populated successfully!");
    process.exit();
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
};

populateDB();