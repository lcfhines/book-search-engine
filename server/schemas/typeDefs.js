const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID
    name: String
  }

  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    getAllTech: [Tech]!
    getAllMatchups: [Matchup]!
    getMatchup(matchupId: ID!): Matchup
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!, tech1_votes: Int, tech2_votes: Int): Matchup
    createVote(matchupId: ID!, tech_num: Int): Matchup
  }
`;

module.exports = typeDefs;
