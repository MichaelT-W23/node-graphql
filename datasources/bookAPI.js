import { Book, Author } from "../database/models.js";

export class BookAPI {
  async getAllBooks() {
    return await Book.findAll({ include: [{ model: Author, as: "author" }] });
  }

  async getBookById(id) {
    return await Book.findByPk(id, { include: [{ model: Author, as: "author" }] });
  }

  async getAllGenres() {
    const books = await Book.findAll({ attributes: ["genre"] });

    const genres = books.map((book) => book.genre);
    const uniqueGenres = [...new Set(genres)];

    return uniqueGenres;
  }
  
  async getBooksByGenre(genre) {
    return await Book.findAll({
      where: { genre },
      include: [{ model: Author, as: "author" }],
    });
  }

  async createBook({ title, publicationYear, genre, authorId }) {
    const author = await Author.findByPk(authorId);

    if (!author) {
      throw new Error("Author not found");
    }

    return await Book.create({ title, publicationYear, genre, author_id: authorId });
  }

  async deleteBook(bookId) {
    const book = await Book.findByPk(bookId);
    
    if (!book) {
      throw new Error("Book not found");
    }

    await book.destroy();
    return { message: "Book deleted successfully" };
  }
}