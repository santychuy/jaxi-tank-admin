/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from 'semantic-ui-react';

import Layout from '../components/Layout';
import FormTask from '../components/Tasks/FormTask';

export default () => (
  <Layout header="Asigna tarea a usuario">
    <Container text style={{ marginTop: '5em' }}>
      <FormTask />
    </Container>
  </Layout>
);
