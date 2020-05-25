import gql from 'graphql-tag';

export const NEW_USER = gql`
  subscription {
    newUser {
      id
      name
    }
  }
`;
