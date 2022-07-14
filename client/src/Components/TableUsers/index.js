import Api from "../../api/Api";
import { FiEdit } from "react-icons/fi";
import './tableUsers.css';

const TableUsers = ({ dataKeys, data }) => {
    return (
        <div className="container">
            <table className="table-page">
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
                        return(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.user_level}</td>
                                <td>{data.status}</td>
                                <td>{data.last_login}</td>
                                <td>
                                    <button className='btn-table'>
                                        <FiEdit />
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
export default TableUsers;