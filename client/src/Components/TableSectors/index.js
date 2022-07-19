import { FiEdit } from "react-icons/fi";
import { TbX } from "react-icons/tb";
import './TableSectors.css';

const TableSectors = ({ dataKeys, data }) => {
    return (
        <div className="container-sectors">
            <table className="table-sectors">
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
                                <td>{data.name}</td>
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

export default TableSectors;