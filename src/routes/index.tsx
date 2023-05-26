import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home/componets/ModalForm';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="*"
        element={<Navigate to="/home" />}
      />
    </Routes>
  );
};
