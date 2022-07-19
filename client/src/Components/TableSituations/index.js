import { FiEdit } from "react-icons/fi";
import { TbX } from "react-icons/tb";
import './TableSituations.css';

const TableSituations = ({ dataKeys, data }) => {
    return (
        <div className="container-situations">
            <table className="table-situations">
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

export default TableSituations;