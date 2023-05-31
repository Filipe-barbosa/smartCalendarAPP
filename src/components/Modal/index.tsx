import { ModalForm } from '../../pages/Home/componets/ModalForm';

type ModalForm = {
  onClose: (open: boolean) => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalForm> = ({ children }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className=" px-10 py-10 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
