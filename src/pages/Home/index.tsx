import React, { useState } from 'react';
import { Header } from './components/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Table } from '../../components/Table';
import { ModalForm } from './components/ModalForm';
import { Modal } from '../../components/Modal';

export const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
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

  return (
    <>
      <Header openModal={() => setOpenModal(!openModal)} />
      <Table data={teste} />
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalForm onClose={() => setOpenModal(false)} />
        </Modal>
      )
      }
    </>
  );
};
