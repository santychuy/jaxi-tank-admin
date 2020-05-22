/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from 'semantic-ui-react';

const { Field } = Form;

export default ({ setDataUser, dataUser }) => {
  const handleChange = ({ target: { value, name } }) => {
    setDataUser({ ...dataUser, [name]: value });
  };

  return (
    <Form>
      <Field>
        <label>Nombre</label>
        <input
          value={dataUser.name}
          name="name"
          onChange={e => handleChange(e)}
          type="text"
        />
      </Field>
      <Field>
        <label>Username</label>
        <input
          value={dataUser.username}
          name="username"
          onChange={e => handleChange(e)}
          type="text"
        />
      </Field>
      <Field>
        <label>Email</label>
        <input
          value={dataUser.email}
          name="email"
          onChange={e => handleChange(e)}
          type="text"
        />
      </Field>
      <Field>
        <label>Password</label>
        <input
          value={dataUser.password}
          name="password"
          onChange={e => handleChange(e)}
          type="password"
        />
      </Field>
    </Form>
  );
};
