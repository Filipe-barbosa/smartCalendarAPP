import Button from '../../../../components/Buttons';
import { SubTitle, Title } from '../../../../components/Text';

type HeaderProps = {
  openModal: () => void,
}

export const Header: React.FC<HeaderProps> = ({openModal}) => {
  return (
    <header className="flex items-center justify-between p-4 mx-52">
      <div>
        <Title />
        <SubTitle />
      </div>
      <Button title={'+ Novo agendamento'} click={openModal}/>
    </header>
  );
};
