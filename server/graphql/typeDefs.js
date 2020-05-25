export const typeDefs = `
    type Query {
        getUsers: [User]!
        getUser(id: ID!): User!
        
        getTasks: [Task]!
        getTask(id: ID!): Task!
    }

    type Mutation {
        createUser(name: String!, email: String!, username: String!, password: String!): User!
        updateUser(id: ID!, name: String, email: String, username: String, password: String): User!
        deleteUser(id: ID!): User!

        createTask(user: ID!, title: String!, description: String!): Task!
        updateTask(id: ID!, title: String, description: String, level: Int, done: Boolean): Task!
        deleteTask(id: ID!, idUser: ID!): Task!
    }

    type Subscription {
        newUser: User!
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
