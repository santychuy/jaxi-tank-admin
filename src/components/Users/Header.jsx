import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default ({ title, change }) => (
  <Header as="h3" block onClick={change} style={{ cursor: 'pointer' }}>
    {title}
    <Icon name="add circle" style={{ float: 'right' }} />
  </Header>
);
