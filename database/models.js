import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db.js';

class Author extends Model {}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "author" }
);


class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("genre", value.charAt(0).toUpperCase() + value.slice(1));
      },
    },
  },
  { sequelize, modelName: "book" }
);

Author.hasMany(Book, { foreignKey: "author_id", as: "books" });
Book.belongsTo(Author, { foreignKey: "author_id", as: "author" });

export { sequelize, Author, Book };