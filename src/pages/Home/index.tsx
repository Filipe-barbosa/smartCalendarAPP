import { Header } from './components/Header';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Table } from '../../components/Table';

export const HomePage: React.FC = () => {
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
      <Header />
      <Table data={teste} />
    </>
  );
};
