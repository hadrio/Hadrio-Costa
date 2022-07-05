import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import GerenciarEqui from './Pages/Equipamento/GerenciarEquipamentos';
import TiposEquipa from './Pages/Equipamento/TiposEquipamentos';
import GerenciarUsers from './Pages/Users/GerenciarUsers';
import "./App.css";



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Gerenciar' element={<GerenciarEqui/>}/>
      <Route path='TiposEquipamentos' element={<TiposEquipa/>}/>
      <Route path='GerenciarUsers' element={<GerenciarUsers/>}/>
     </Routes>
    </div>
  );
}

export default App;
