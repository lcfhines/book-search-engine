const { AuthenticationError } = require('apollo-server-express');
const { User , Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // context
  Query: {
    me: async (parent, { username }) => {
      return User.findOne({

      });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
    }

  },
};

module.exports = resolvers;
