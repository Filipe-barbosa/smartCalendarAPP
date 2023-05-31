import React, { useState } from 'react';

const BtnModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-[#21d17d] text-white font-medium py-2 px-4 border rounded-lg shadow text-sm"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        + Novo agendamento
      </button>
    </div>
  );
};

export default BtnModal;
