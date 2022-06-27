import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="PageDash">
            <Sidebar />
            <Navbar />
            <div className="Dashboard">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
};

export default Dashboard;