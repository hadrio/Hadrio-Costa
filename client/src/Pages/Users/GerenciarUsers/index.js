import { useState } from "react";
import Header from "../../../Components/Hearder";
import Sidebar from "../../../Components/Sidebar";
import './GerenciarUsers.css';

const GerenciarUsers = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit  = async (e) =>{
        console.log(name,username,password,role);
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
                                action="/GerenciarUsers"
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
                                    type='role'
                                    name='role'
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
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


export default GerenciarUsers;

