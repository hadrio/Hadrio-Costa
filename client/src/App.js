import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import "./App.css";
import Equipamento from './Pages/Equipamento';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Equipamentos' element={<Equipamento />} />
     </Routes>
    </div>
  );
}

export default App;
