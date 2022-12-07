const { AuthenticationError } = require('apollo-server-express');
const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    getAllTech: async (parent) => {
      return Tech.find({});
    },
    getAllMatchups: async (parent) => {
      return Matchup.find({});
    },
    getMatchup: async (parent, {matchupId}) => {
      return Matchup.findOne({ _id: matchupId });
    }
  },

  Mutation: {
    createMatchup: async (parent, { tech1, tech2 }) => {
      const matchup = await Matchup.create({ tech1, tech2 })
      return matchup
    },
    createVote: async (parent, { matchupId, tech_num }) => {
      const matchup = await Matchup.findOneAndUpdate(
        { _id: matchupId },
        { $inc: { [`tech${tech_num}_votes`]: 1 } },
        { new: true }
      );
      return matchup
    }
  },
};

module.exports = resolvers;
