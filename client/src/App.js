import { Route, Routes } from 'react-router-dom';
import GerenciarEqui from './Pages/Equipamento/GerenciarEquipamentos';
import CrudEquipments from './Pages/Equipamento/CrudEquipments';
import TiposEquipa from './Pages/Equipamento/TiposEquipamentos';
import Register from './Pages/Users/GerenciarUsers';
import UsersTable from './Pages/Users/UsersTable';
import Manufacturer from './Pages/Manufacturer';
import Situation from './Pages/Situations';
import Dashboard from './Pages/Dashboard';
import Sectors from './Pages/Sectors';
import Reports from './Pages/Reports';
import Login from './Pages/Login';
import "./App.css";



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Gerenciar' element={<GerenciarEqui/>}/>
      <Route path='CrudEquipments' element={<CrudEquipments/>}/>
      <Route path='TiposEquipamentos' element={<TiposEquipa/>}/>
      <Route path='UsersTable' element={<UsersTable />}/>
      <Route path='Register' element={<Register />}/>
      <Route path='Situations' element={<Situation/>}/>
      <Route path='Sectors' element={<Sectors/>}/>
      <Route path='Manufacturer' element={<Manufacturer/>}/>
      <Route path='Reports' element={<Reports/>}/>
     </Routes>
    </div>
  );
}

export default App;
