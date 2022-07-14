import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../api/Api";
import Header from "../../../Components/Hearder";
import Sidebar from "../../../Components/Sidebar";
import TableUsers from "../../../Components/TableUsers";
import './usersTable.css';


const cabecalho = [
    '#',
    'nome',
    'usuário',
    'papel do usuário',
    'estado',
    'último login',
    'ações'
]
const UsersTable = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect(function(){
        async function getData(){
            const data = await Api.get('users')
            setData(data.data)
            console.table(data)
        }getData();
    },[]);

    return (
        <div className="page">
            <Sidebar />
            <div className="users-page">
                <Header />
                <div className="scroll">
                    <div className="table">
                        <div className="header-table">
                            <h1 className="title-table">
                                Usuários
                            </h1>
                            <button
                                className="button"
                                onClick={() => {
                                    navigate("/Register");
                                }}>
                                Adicionar usuário
                            </button>
                        </div>
                        <div className="table-box">
                            <TableUsers
                                data={data}
                                dataKeys={cabecalho}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersTable;