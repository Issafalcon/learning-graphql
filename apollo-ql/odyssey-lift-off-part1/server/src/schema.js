const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for homepage"
    tracksForHome: [Track!]!
  }

  "A tack is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
