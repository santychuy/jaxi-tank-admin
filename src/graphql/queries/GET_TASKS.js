import gql from 'graphql-tag';

export const GET_TASKS = gql`
  {
    getTasks {
      id
      title
      description
      user
      done
    }
  }
`;
