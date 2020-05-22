import gql from 'graphql-tag';

export const CREATE_TASK = gql`
  mutation CreateTask($user: ID!, $title: String!, $description: String!) {
    createTask(user: $user, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
