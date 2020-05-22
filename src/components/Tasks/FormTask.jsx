/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Select, Button } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { withApollo } from '../../utils/apollo';
import { GET_USERS } from '../../graphql/queries/GET_USERS';
import { CREATE_TASK } from '../../graphql/mutations/CREATE_TASK';

const { Group, Field } = Form;

const FormTask = () => {
  const [taskData, setTaskData] = useState({});
  const { loading, error, data } = useQuery(GET_USERS);
  const [createTask] = useMutation(CREATE_TASK);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  const options = data.getUsers.map(({ id, name }) => ({
    key: id,
    text: name,
    value: id,
  }));

  const handleChangeInput = ({ value, name }) => {
    setTaskData({ ...taskData, [name]: value });
  };

  const handleChangeOptions = idUser => {
    setTaskData({ ...taskData, user: idUser });
  };

  const saveTask = async () => {
    try {
      const { title, description, user } = taskData;
      await createTask({ variables: { user, title, description } });
      setTaskData({ title: '', user: '', description: '' });
      alert('Tarea asignada correctamente');
    } catch (e) {
      throw Error(e.message);
    }
  };

  return (
    <Form>
      <Group grouped>
        <Field>
          <label>Título</label>
          <input
            name="title"
            type="text"
            value={taskData.title}
            onChange={({ target }) => handleChangeInput(target)}
          />
        </Field>
        <Field>
          <label>Descripción</label>
          <input
            name="description"
            type="text"
            value={taskData.description}
            onChange={({ target }) => handleChangeInput(target)}
          />
        </Field>
        <Field>
          <label>Usuario</label>
          <Select
            options={options}
            onChange={(_, { value }) => handleChangeOptions(value)}
          />
        </Field>
      </Group>
      <Field>
        <Button onClick={saveTask}>Asignar</Button>
      </Field>
    </Form>
  );
};

export default withApollo({ ssr: true })(FormTask);
