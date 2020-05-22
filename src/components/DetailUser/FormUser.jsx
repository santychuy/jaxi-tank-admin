/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Grid, Form, Button } from 'semantic-ui-react';
import Router from 'next/router';

import { UPDATE_USER } from '../../graphql/mutations/UPDATE_USER';
import { DELETE_USER } from '../../graphql/mutations/DELETE_USER';
import { withApollo } from '../../utils/apollo';

const { Column } = Grid;

const FormUser = ({
  id,
  data: {
    getUser: { name, username, email },
  },
}) => {
  const [datosUser, setDatosUser] = useState({ name, username, email });
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const handleChange = ({ target }) => {
    setDatosUser({ ...datosUser, [target.name]: target.value });
  };

  const handleSave = async () => {
    try {
      await updateUser({
        variables: {
          id,
          email: datosUser.email,
          name: datosUser.name,
          username: datosUser.username,
        },
      });
      alert('Usuario Actualizado');
    } catch (e) {
      throw Error(e);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser({ variables: { id } });
      Router.push('/');
      alert('Usuario Eliminado');
    } catch (e) {
      throw Error(e);
    }
  };

  return (
    <Column style={{ padding: '0 5em' }}>
      <h1>Datos</h1>
      <Form>
        <Form.Field>
          <label>Nombre</label>
          <input value={datosUser.name} name="name" onChange={e => handleChange(e)} />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input
            value={datosUser.username}
            name="username"
            onChange={e => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input value={datosUser.email} name="email" onChange={e => handleChange(e)} />
        </Form.Field>
        <Button primary onClick={handleSave}>
          Guardar
        </Button>
        <Button negative onClick={handleDeleteUser}>
          Eliminar Usuario
        </Button>
      </Form>
    </Column>
  );
};

export default withApollo({ ssr: true })(FormUser);
