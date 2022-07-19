import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Hearder';
import './Situations.css';
import TableSituations from '../../Components/TableSituations';
import Api from '../../api/Api';
import { useState, useEffect } from 'react';


const cabecalho = [
    '#',
    'situações',
    'ações'
]
const Situation = () => {
    const [data, setData] = useState([]);
    useEffect(function(){
        async function getData(){
            const data = await Api.get('situations')
            setData(data.data)
            console.table(data)
        }getData();
    },[]);
    return(
        <div className='page-situations'>
            <Sidebar />
            <div className='situations'>
                <Header />
                <div className='scroll'>
                    <div className='table-situation'>
                        <TableSituations
                            data={data}
                            dataKeys={cabecalho} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Situation;