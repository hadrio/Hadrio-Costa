import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import './Equipamento.css';

const Equipamento = () => {
    return (
        <div className="PageDash">
            <Sidebar />
            <Navbar />
            <div className="Equipamento">
                Equipamento
            </div>
        </div>
    )
};

export default Equipamento;