import gql from 'graphql-tag';

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    getTask(id: $id) {
      title
      description
      level
      done
    }
  }
`;
