/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useRouter } from 'next/router';
import { Container, Grid } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER } from '../graphql/queries/GET_USER';
import { withApollo } from '../utils/apollo';
import Layout from '../components/Layout';
import Tasks from '../components/DetailUser/Tasks';
import FormUser from '../components/DetailUser/FormUser';

const { Row } = Grid;

const User = () => {
  const {
    query: { id },
  } = useRouter();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <Layout header="Editar">
      <Container style={{ marginTop: '5em' }}>
        <Grid divided="vertically">
          <Row columns={2}>
            <FormUser id={id} data={data} />
            <Tasks id={id} data={data} />
          </Row>
        </Grid>
      </Container>
    </Layout>
  );
};

export default withApollo({ ssr: true })(User);
