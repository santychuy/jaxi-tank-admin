import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../graphql/mutations/CREATE_USER';
import { withApollo } from '../utils/apollo';
import FormModal from './FormModal';

const { Header, Content, Actions } = Modal;

const ModalUser = ({ open, handleModal }) => {
  const [dataUser, setDataUser] = useState({});
  const [createUser] = useMutation(CREATE_USER);

  const saveUser = async () => {
    const { name, username, email, password } = dataUser;
    await createUser({ variables: { name, username, email, password } });
    handleModal();
  };

  return (
    <Modal size="small" open={open}>
      <Header>Agregar Usuario</Header>
      <Content>
        <FormModal setDataUser={setDataUser} dataUser={dataUser} />
      </Content>
      <Actions>
        <Button
          negative
          onClick={() => {
            setDataUser({});
            handleModal();
          }}
        >
          Cancel
        </Button>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Guardar"
          onClick={saveUser}
        />
      </Actions>
    </Modal>
  );
};

export default withApollo({ ssr: true })(ModalUser);
