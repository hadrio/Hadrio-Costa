import { FiEdit } from "react-icons/fi";
import { TbX } from "react-icons/tb";
import './tableEquipments.css';


const TableEquipments = ({ dataKeys, data }) => {
    return (
        <div className="container-equipments">
            <table className="table-equipments">
                <thead>
                    <tr>{
                        dataKeys.map(keys => {
                            return (
                                <th scope="col" key={keys}>{keys}</th>
                            )
                        })
                    }</tr>
                </thead>
                <tbody>
                    {data.map(data => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.tombo}</td>
                                <td>{data.specifications}</td>
                                <td>{data.types_equip_id}</td>
                                <td>
                                    <button className='btn-table'>
                                        <FiEdit />
                                    </button>
                                    <button className="btn-equipmnets">
                                        <TbX />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableEquipments;