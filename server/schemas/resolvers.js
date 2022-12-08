const { AuthenticationError } = require('apollo-server-express');
const { User , Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // context
  Query: {
    // add context to the query so we can retrieve the logged-in user without searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ username: context.user.username })
      }
      // throw error if no user retrieved
      throw new AuthenticationError('You must be logged in!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;
