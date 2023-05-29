import { SubTitle, Title } from '../../../../components/Text';
import BtnModal from '../../../../components/modal/BtnModal';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 mx-52">
      <div>
        <Title />
        <SubTitle />
      </div>
      <BtnModal />
    </header>
  );
};
