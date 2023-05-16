import React, { useState} from 'react';
import ModalForm from './index';

const BtnModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        type='button'
        onClick={ () => setIsOpen(true)}
      >
        + Novo agendamento
      </button>
      { isOpen ? <ModalForm onClose={() => setIsOpen(false)}/> : null }
    </div>
  );
};

export default BtnModal;