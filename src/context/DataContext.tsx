import React, { createContext, useState } from 'react';

interface DataContextProps {
  data: Date;
  setData: (date: Date) => void;
}

export const DataContext = createContext<DataContextProps>({
  data: new Date(),
  setData: () => {console.log('setDate');},
});

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