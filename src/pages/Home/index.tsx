import React, { useState } from 'react';
import { Header } from './components/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Table } from '../../components/Table';
import { ModalForm } from './components/ModalForm';
import { Modal } from '../../components/Modal';
import { InputForm } from '../../types/InputForm';

export const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useLocalStorage('formValues', []);

  const handleFormSubmit = (data: InputForm) => {
    setFormValues([...formValues, data]);
    setOpenModal(false);
  };
  return (
    <>
      <Header openModal={() => setOpenModal(!openModal)} />
      <Table data={[...formValues]} />

      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalForm handleFormSubmit={handleFormSubmit} />
        </Modal>
      )}
    </>
  );
};
