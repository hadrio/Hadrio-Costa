import { useState, useRef, useEffect} from 'react';

import './Login.css';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    },[])
    useEffect(() => {
        setErrMsg('');
    },[username, password])
 
    const handleSubmit = async (e) => {
        e.preventDefault()
       console.log(username,password)
    }


    return(
        <div className='firstPage'>
            <form className='loginSection' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertivr">{errMsg}</p>
                <input
                    required
                    autoComplete='off'
                    placeholder='Usuário'
                    ref={userRef}
                    type='user'
                    name='user'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    required
                    placeholder='Senha'
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>
                    entrar
                </button>
            </form>
            <div className='imageSection'>
                imagebox
            </div>
        </div>
    )
};

export default Login;