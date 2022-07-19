import { useState } from "react";
import Api from "../../../api/Api";
import Header from "../../../Components/Hearder";
import Sidebar from "../../../Components/Sidebar";
import './GerenciarUsers.css';

const Register = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [status, setStatus] = useState("")

    const handleSubmit  = async (e) =>{
        e.preventDefault()
        Api.post('/register', {
            name: name,
            username: username,
            password: password,
            userLevel: userLevel,
            status: status,
        }).then((res) =>{
            console.log(res);
        })
    }


    
    return(
        <div className="fullPage">
            <Sidebar/>
            <div className="hearder">
                <Header/>
                <div className="scroll">
                    <div className="conteudoPage">
                        <div className="boxUsers">
                            <form 
                                className="file" 
                                method='post'
                                onSubmit={handleSubmit} 
                                action="/register"
                                >
                                <input
                                    className="input"
                                    required
                                    placeholder="Nome"
                                    type='name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="usuario"
                                    type='user'
                                    name='user'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="senha"
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Papel do usuario"
                                    type='userLevel'
                                    name='userLevel'
                                    value={userLevel}
                                    onChange={(e) => setUserLevel(e.target.value)}
                                />
                                <input
                                    className="input"
                                    required
                                    placeholder="Status"
                                    type='status'
                                    name='status'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                <button 
                                    className="input">
                                        Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Register;

