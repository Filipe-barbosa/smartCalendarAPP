import { DataContext } from './DataContext';
import { useState } from 'react';

interface DataContextProps {
  data: Date;
  setData: (date: Date) => void;
}


export function DataProvider(props: { children: React.ReactNode }) {
  const [data, setData] = useState(new Date());

  const contextValue: DataContextProps = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
}
