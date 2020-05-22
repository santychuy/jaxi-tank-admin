import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Link from 'next/link';

export const Navigation = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Link href="/">
        <Menu.Item as="a">Usuarios</Menu.Item>
      </Link>
      <Link href="/tasks">
        <Menu.Item as="a">Tareas</Menu.Item>
      </Link>
    </Container>
  </Menu>
);
