import React from 'react';
import { useRouter } from 'next/router';
import { Grid } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER } from '../../graphql/queries/GET_USER';
import { withApollo } from '../../utils/apollo';
import Tasks from './Tasks';
import FormUser from './FormUser';

const { Row } = Grid;

const DetailUser = () => {
  const {
    query: { id },
  } = useRouter();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <Grid divided="vertically">
      <Row columns={2}>
        <FormUser id={id} data={data} />
        <Tasks id={id} data={data} />
      </Row>
    </Grid>
  );
};

export default withApollo({ ssr: true })(DetailUser);
