import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import Link from 'next/link';

export const User = ({ name, idUser }) => (
  <Link href={{ pathname: '/user', query: { id: idUser } }}>
    <a>
      <Segment>
        {name}
        <Icon name="angle right" size="large" style={{ float: 'right' }} />
      </Segment>
    </a>
  </Link>
);
