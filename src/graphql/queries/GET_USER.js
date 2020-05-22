import gql from 'graphql-tag';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      name
      username
      email
      tasks
    }
  }
`;
