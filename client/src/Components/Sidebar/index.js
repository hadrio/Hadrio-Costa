import { MdDashboard, MdOutlineFormatListBulleted} from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import "./Sidebar.css";



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="title"><p>MS Consulting</p></div>
            <ul className="list">
                <li className="item">
                    <div id="icon"><ImHome3/></div>
                    <Link to='/dashboard'id="title">Dashboard</Link>
                </li>
                <li className="item">
                    <div id="icon"><MdDashboard/></div>
                    <p id="title">Equipamentos</p>
                </li>
                <li className="item">
                    <div id="icon"><MdOutlineFormatListBulleted/></div>
                    <Link to='/Fabricantes'id="title">Fabricantes</Link>
                </li>
                <li className="item">
                    <div id="icon"><MdOutlineFormatListBulleted/></div>
                    <Link to='/Setores'id="title">Setores</Link>
                </li>
                <li className="item">
                    <div id="icon"><MdOutlineFormatListBulleted/></div>
                    <Link to='/Situacao'id="title">Situação</Link>
                </li>
                <li className="item">
                    <div id="icon"><BiShuffle/></div>
                    <p id="title">Transferências</p>
                </li>
                <li className="item">
                    <div id="icon"><GoBook/></div>
                    <Link to='/Relatorios' id="title">Relatórios</Link>
                </li>
                <li className="item">
                    <div id="icon"><FaUser/></div>
                    <Link to='/GerenciarUsers' id="title">Usuários</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;