export const typeDefs = `
    type Query {
        getUsers: [User]!
        getUser(id: ID!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!, username: String!, password: String!): User!
    }

    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        password: String!
        tasks: [ID]!
    }

    type Task {
        id: ID!
        title: String!
        description: String!
        level: Int!
        done: Boolean!
        user: ID!
    }
`;
