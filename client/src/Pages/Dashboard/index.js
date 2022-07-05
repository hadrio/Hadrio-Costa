import { MdDashboard } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiDesk } from "react-icons/gi";
import DonutChart from "../../Components/Charts/DonutChart";
import ColumChart from "../../Components/Charts/ColumChart";
import BarChart from "../../Components/Charts/BarCharts";
import PieChart from "../../Components/Charts/PieChart";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Hearder";
import "./Dashboard.css";



const Dashboard = () => {

    return (
        <div className="PageDash" >
            <Sidebar />
            <div className="Dashboard">
                <Header />
                <div className="scroll">
                    <div className="conteudoPage">
                        <div className="box">
                            <div className="icon"><FaUser /></div>
                            <div className="info">
                                <h1>2</h1>
                                <p>Usuários</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><MdDashboard /></div>
                            <div className="info">
                                <h1>2</h1>
                                <p>Equipamentos</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><BiShuffle /></div>
                            <div className="info">
                                <h1>1</h1>
                                <p>Transferências</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><GiDesk /></div>
                            <div className="info">
                                <h1>4</h1>
                                <p>Setores</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-graficos">
                        <div className="graficos">
                            <div className="pie-chart">
                                <PieChart />
                            </div>
                            <div className="bar-chart">
                                <BarChart/>
                            </div>
                        </div>
                    </div>
                    <div className="box-graficos">
                        <div className="graficos">
                            <div className="pie-chart">
                                <ColumChart />
                            </div>
                            <div className="pie-chart">
                                <DonutChart/>
                            </div>
                        </div>
                    </div>
                    <div className="conteudoPage">
                        <div className="box">
                            tabela 1
                        </div>
                        <div className="box">
                            tabela 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;