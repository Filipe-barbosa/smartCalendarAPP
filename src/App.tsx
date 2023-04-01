import React from 'react';
import DataProvider from './context/DataProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

    <DataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
