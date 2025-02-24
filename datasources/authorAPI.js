import { Author, Book } from "../database/models.js";

export class AuthorAPI {
  async getAllAuthors() {
    return await Author.findAll({ include: [{ model: Book, as: "books" }] });
  }

  async getAuthorById(id) {
    return await Author.findByPk(id, { include: [{ model: Book, as: "books" }] });
  }

  async createAuthor({ name, age, nationality }) {
    return await Author.create({ name, age, nationality });
  }

  async deleteAuthor(authorId) {
    const author = await Author.findByPk(authorId);
    
    if (!author) {
      throw new Error("Author not found");
    }

    await author.destroy();
    return { message: "Author deleted successfully" };
  }
}