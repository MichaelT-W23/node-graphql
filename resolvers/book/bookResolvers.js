export const bookResolvers = {
  Query: {
    getAllBooks: (parent, args, { dataSources }) => {
      return dataSources.bookAPI.getAllBooks();
    },
    getBook: (parent, { id }, { dataSources }) => {
      return dataSources.bookAPI.getBookById(id);
    },
    getAllGenres: (parent, args, { dataSources }) => {
      return dataSources.bookAPI.getAllGenres();
    },
    getBooksByGenre: (parent, { genre }, { dataSources }) => {
      return dataSources.bookAPI.getBooksByGenre(genre);
    },
  },
  Mutation: {
    createBook: (parent, { title, publicationYear, genre, authorId }, { dataSources }) => {
      return dataSources.bookAPI.createBook({ title, publicationYear, genre, authorId });
    },
    deleteBook: (parent, { bookId }, { dataSources }) => {
      return dataSources.bookAPI.deleteBook(bookId);
    },
  },
  Book: {
    author: (parent, args, { dataSources }) => {
      return dataSources.authorAPI.getAuthorById(parent.authorId);
    },
  },
};
