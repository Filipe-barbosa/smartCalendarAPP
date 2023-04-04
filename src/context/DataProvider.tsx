import { DataContext } from './DataContext';

interface props {
  children: JSX.Element | JSX.Element[]
}

const DataProvider = ({ children }: props) => {
  return (
    <DataContext.Provider value={{}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;