type ModalForm = {
  onClose: (open: boolean) => void;
};

const  ModalForm: React.FC<ModalForm> = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className=" px-10 py-10 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <h2>Formulario de inscrição</h2>
          <button
            className="text-xl leading-none focus:outline-none text-gray-500"
            onClick={() => onClose(false)}
          >
            ×
          </button>
        </div>
        <div>
          dados do formulario podem ser inseridos aqui
        </div>
      </div>
    </div>
  );
};

export default ModalForm;