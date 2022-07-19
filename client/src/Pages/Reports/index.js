import Sidebar from '../../Components/Sidebar';
import Hearder from '../../Components/Hearder';
import './reports.css';

const Reports = () => {
    return(
        <div className='reports-page'>
            <Sidebar />
            <div className='reports'>
                <Hearder />
            </div>
        </div>
    )
};

export default Reports;