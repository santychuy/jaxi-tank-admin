import React from 'react';
import { Container } from 'semantic-ui-react';

import Layout from '../components/Layout';
import DetailUser from '../components/DetailUser';

export default () => (
  <Layout header="Editar">
    <Container style={{ marginTop: '5em' }}>
      <DetailUser />
    </Container>
  </Layout>
);
