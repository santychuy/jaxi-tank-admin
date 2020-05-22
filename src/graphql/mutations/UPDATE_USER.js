import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation UpdateUser($name: String, $email: String, $username: String, $id: ID!) {
    updateUser(name: $name, email: $email, username: $username, id: $id) {
      email
      name
      username
    }
  }
`;
