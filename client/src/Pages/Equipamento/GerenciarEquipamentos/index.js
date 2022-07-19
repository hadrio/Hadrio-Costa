import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../api/Api";
import Header from "../../../Components/Hearder";
import Sidebar from "../../../Components/Sidebar";
import TableEquipments from "../../../Components/TableEquipments";
import './Gerenciar.css';


const cabecalho = [
    '#',
    'Tombo',
    'Especificações',
    'Tipos de equipamentos',
    'Ações'
]
const GerenciarEqui = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(function(){
        async function getData(){
            const data = await Api.get('equipments')
            setData(data.data)
            console.table(data)
        }getData();
    },[]);

    return (
        <div className="full-page">
            <Sidebar />
            <div className="hearder">
                <Header />
                <div className="table-equipments">
                    <div className="header-table">
                        <h1 className="title-table">
                            Todos os equipamentos
                        </h1>
                        <button
                            className="button"
                            onClick={() => {
                                navigate("/CrudEquipments");
                            }}>
                            Adicionar equipamento
                        </button>
                    </div>
                    <div className="table-box">
                        <TableEquipments
                            data={data}
                            dataKeys={cabecalho}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GerenciarEqui;