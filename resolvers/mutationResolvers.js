import { bookResolvers } from './book/bookResolvers.js';
import { authorResolvers } from './author/authorResolvers.js';

export const mutationResolvers = {
  ...bookResolvers.Mutation,
  ...authorResolvers.Mutation,
};