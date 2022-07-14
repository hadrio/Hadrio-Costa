import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import GerenciarEqui from './Pages/Equipamento/GerenciarEquipamentos';
import TiposEquipa from './Pages/Equipamento/TiposEquipamentos';
import Register from './Pages/Users/GerenciarUsers';
import UsersTable from './Pages/Users/UsersTable';
import "./App.css";



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Gerenciar' element={<GerenciarEqui/>}/>
      <Route path='TiposEquipamentos' element={<TiposEquipa/>}/>
      <Route path='UsersTable' element={<UsersTable />}/>
      <Route path='Register' element={<Register />}/>
     </Routes>
    </div>
  );
}

export default App;
