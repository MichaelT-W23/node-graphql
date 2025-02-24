export const authorResolvers = {
  Query: {
    getAllAuthors: (parent, args, { dataSources }) => {
      return dataSources.authorAPI.getAllAuthors();
    },
    getAuthor: (parent, { id }, { dataSources }) => {
      return dataSources.authorAPI.getAuthorById(id);
    },
  },
  Mutation: {
    createAuthor: (parent, { name, age, nationality }, { dataSources }) => {
      return dataSources.authorAPI.createAuthor({ name, age, nationality });
    },
    deleteAuthor: (parent, { authorId }, { dataSources }) => {
      return dataSources.authorAPI.deleteAuthor(authorId);
    },
  },
  Author: {
    books: (parent, args, { dataSources }) => {
      return dataSources.bookAPI.getBooksByAuthorId(parent.id);
    },
  },
};