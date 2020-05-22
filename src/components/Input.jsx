/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from 'semantic-ui-react';

const { Field } = Form;

export const Input = ({ change, value, name, label, type }) => (
  <Field>
    <label>{label}</label>
    <input value={value} name={name} onChange={e => change(e)} type={type} />
  </Field>
);
