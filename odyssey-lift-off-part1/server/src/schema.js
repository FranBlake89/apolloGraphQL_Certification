const gql = require("graphql-tag")
//It is a tagged template literal for wrapping GraphQL strings, such as schema definitions

const typeDefs = gql`
    type Query{
        "Query to get Tracks array for homepage"
        tracksForHome: [Track!]!
    }

"A track is a group of modules that teaches about a specific topic"    
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;


module.exports = typeDefs;