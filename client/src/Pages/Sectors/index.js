import { useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Hearder';
import './Sectors.css';
import TableSectors from '../../Components/TableSectors';
import Api from '../../api/Api';



const cabecalho = [
    '#',
    'setores',
    'ações'
]
const Sectors = () => {
    const [data, setData] = useState([]);
    useEffect(function(){
        async function getData(){
            const data = await Api.get('sectors')
            setData(data.data)
            console.table(data)
        }getData();
    },[]);
    return(
        <div className='page-sectors'>
            <Sidebar />
            <div className='sectors'>
                <Header />
                <div className='scroll'>
                    <div className='table-sector'>
                        <TableSectors
                            data={data}
                            dataKeys={cabecalho} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sectors;