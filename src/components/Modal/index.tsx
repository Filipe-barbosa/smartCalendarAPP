type ModalForm = {
  children: React.ReactNode;
  onClose: () => void,
};

export const Modal: React.FC<ModalForm> = ({ children }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="px-10 py-10 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <button
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => onclose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
