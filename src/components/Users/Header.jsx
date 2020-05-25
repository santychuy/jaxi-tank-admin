import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default ({ title, change }) => (
  <Header as="h3" block>
    {title}
    <Icon
      name="add circle"
      style={{ float: 'right', cursor: 'pointer' }}
      onClick={change}
    />
  </Header>
);
