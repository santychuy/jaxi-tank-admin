/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from 'semantic-ui-react';
import { Input } from './Input';

export default ({ setDataUser, dataUser }) => {
  const handleChange = ({ target: { value, name } }) => {
    setDataUser({ ...dataUser, [name]: value });
  };

  return (
    <Form>
      <Input
        change={handleChange}
        label="Nombre"
        name="name"
        type="text"
        value={dataUser.name}
      />
      <Input
        change={handleChange}
        label="Username"
        name="username"
        type="text"
        value={dataUser.username}
      />
      <Input
        change={handleChange}
        label="Email"
        name="email"
        type="text"
        value={dataUser.email}
      />
      <Input
        change={handleChange}
        label="Password"
        name="password"
        type="password"
        value={dataUser.password}
      />
    </Form>
  );
};
