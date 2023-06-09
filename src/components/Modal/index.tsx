type ModalForm = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalForm> = ({ children, onClose }) => {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative max-w-3xl w-full mx-auto mt-10 bg-white rounded-xl">
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={onClose}
        >
          X
        </button>
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};
