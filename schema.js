import { gql } from 'graphql-tag';
import { resolvers } from './resolvers/index.js';

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int!
    nationality: String!
    books: [Book] 
  }

  type Book {
    id: ID!
    title: String!
    publicationYear: Int!
    genre: String!
    author: Author!
  }

  type Query {
    getAllAuthors: [Author]
    getAllBooks: [Book]
    getAuthor(id: Int!): Author
    getBook(id: Int!): Book
    getAllGenres: [String]
    getBooksByGenre(genre: String!): [Book]
  }

  type Mutation {
    createAuthor(name: String!, age: Int!, nationality: String!): Author
    createBook(title: String!, publicationYear: Int!, genre: String!, authorId: Int!): Book
    deleteAuthor(authorId: Int!): Boolean!
    deleteBook(bookId: Int!): Boolean!
  }
`;

export { typeDefs, resolvers };