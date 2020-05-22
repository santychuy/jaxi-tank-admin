import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Grid, Segment, Checkbox } from 'semantic-ui-react';

import { GET_TASK } from '../../graphql/queries/GET_TASK';
import { withApollo } from '../../utils/apollo';

const { Column } = Grid;

const Tasks = ({
  id,
  data: {
    getUser: { tasks },
  },
}) => {
  return (
    <Column style={{ padding: '0 5em' }}>
      <h1>Tareas Asignadas</h1>

      {tasks.length === 0 && <h3>No tiene tareas asignadas</h3>}
      {tasks.map(idTask => {
        const { loading, error, data } = useQuery(GET_TASK, {
          variables: { id: idTask },
        });
        console.log(data);
        return (
          <Segment attached key={idTask}>
            {/* <h2>{title}</h2>
            <p>{description}</p> */}
            Hola
          </Segment>
        );
      })}
    </Column>
  );
};

export default withApollo({ ssr: true })(Tasks);
