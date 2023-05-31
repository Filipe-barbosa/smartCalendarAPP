import React, { useState } from 'react';
import { Header } from './components/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Table } from '../../components/Table';
import { ModalForm } from './components/ModalForm';
import { Modal } from '../../components/Modal';
import { InputForm } from '../../types/InputForm';

export const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState<InputForm[]>([]);
  const [teste, setTeste] = useLocalStorage('teste2', [
    {
      name: 'teste1',
      phone: '3333333',
      appointmentDate: '20/05/2023',
      time: '15:30',
    },
    {
      name: 'teste2',
      phone: '44444444',
      appointmentDate: '21/05/2023',
      time: '16:30',
    },
  ]);
  const handleFormSubmit = (data: InputForm) => {
    setFormValues([...formValues, data]);
    setOpenModal(false);
  };
  return (
    <>
      <Header openModal={() => setOpenModal(!openModal)} />
      <Table data={[...teste, ...formValues]} />
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalForm onClose={() => setOpenModal(false)} />
        </Modal>
      )
      }
    </>
  );
};
