import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import { Navigation } from './Navigation';

export default ({ children, header }) => (
  <>
    <Navigation />
    <Container style={{ marginTop: '10em' }}>
      <Header as="h1">{header}</Header>

      {children}
    </Container>
  </>
);
