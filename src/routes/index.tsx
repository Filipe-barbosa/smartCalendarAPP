import { Navigate, Route, Routes } from 'react-router-dom';
import Teste from '../components/teste';




export const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/home" element={<Teste/>}/>
      <Route path='*' element={<Navigate to= "/home"/>}/>
    </Routes>
  );
};