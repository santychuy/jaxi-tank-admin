import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Grid, Segment, Button } from 'semantic-ui-react';

import { GET_TASK } from '../../graphql/queries/GET_TASK';
import { DELETE_TASK } from '../../graphql/mutations/DELETE_TASK';
import { withApollo } from '../../utils/apollo';

const { Column } = Grid;

const Tasks = ({
  idUser,
  data: {
    getUser: { tasks },
  },
}) => {
  const [deleteTask] = useMutation(DELETE_TASK);

  const handleCompleteTask = async idTask => {
    try {
      await deleteTask({
        variables: {
          id: idTask,
          idUser,
        },
      });
      alert('Tarea terminada');
    } catch (e) {
      throw Error(e);
    }
  };

  return (
    <Column style={{ padding: '0 5em' }}>
      <h1>Tareas Asignadas</h1>

      {tasks.length === 0 && <h3>No tiene tareas asignadas</h3>}
      {tasks.map(idTask => {
        const { loading, error, data } = useQuery(GET_TASK, {
          variables: { id: idTask },
        });
        if (loading) return <></>;
        if (error) return <>Error</>;
        const { getTask: { title, description, id } = {} } = data;
        return (
          <Segment attached key={idTask}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button onClick={() => handleCompleteTask(id)} primary>
              Completar
            </Button>
          </Segment>
        );
      })}
    </Column>
  );
};

export default withApollo({ ssr: true })(Tasks);
