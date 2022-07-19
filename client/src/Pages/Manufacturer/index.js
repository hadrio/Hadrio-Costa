import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Hearder';
import TableManufacturers from '../../Components/TableManufacturers';
import './Manufacturer.css';
import { useEffect, useState } from 'react';
import Api from '../../api/Api';


const cabecalho = [
    '#',
    'Fabricantes',
    'ações'
]
const Manufacturer = () => {

    const [data, setData] = useState([]);
    useEffect(function(){
        async function getData(){
            const data = await Api.get('manufacturers')
            setData(data.data)
            console.table(data)
        }getData();
    },[]);
    return(
        <div className='page-manufacturer'>
            <Sidebar />
            <div className='manufacturer'>
                <Header />
                <div className='scroll'>
                    <div className='table-manufacturer'>
                        <TableManufacturers
                            data={data}
                            dataKeys={cabecalho} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Manufacturer;