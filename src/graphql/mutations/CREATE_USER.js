import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    createUser(name: $name, email: $email, username: $username, password: $password) {
      id
      name
    }
  }
`;
