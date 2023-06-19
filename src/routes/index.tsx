import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/smartCalendarAPP"
        element={<HomePage />}
      />
      <Route
        path="*"
        element={<Navigate to="/smartCalendarAPP" />}
      />
    </Routes>
  );
};
