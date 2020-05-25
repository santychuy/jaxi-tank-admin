import React, { useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from '../../utils/apollo';
import { GET_USERS } from '../../graphql/queries/GET_USERS';
import { User } from './User';
import Header from './Header';
import ModalUser from '../Modal';

const ListUser = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [open, setOpen] = useState(false);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  const handleModal = () => setOpen(!open);

  return (
    <Container text style={{ marginTop: '5em' }}>
      <ModalUser open={open} handleModal={handleModal} />
      <Header title="Agregar Usuario" change={handleModal} />
      {data.getUsers.length === 0 ? (
        <h1>No hay usuarios</h1>
      ) : (
        <Segment.Group>
          {data.getUsers.map(({ id, name }) => (
            <User key={id} name={name} idUser={id} />
          ))}
        </Segment.Group>
      )}
    </Container>
  );
};

export default withApollo({ ssr: true })(ListUser);
