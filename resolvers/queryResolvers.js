import { bookResolvers } from './book/bookResolvers.js';
import { authorResolvers } from './author/authorResolvers.js';

export const queryResolvers = {
  ...bookResolvers.Query,
  ...authorResolvers.Query
};