import React, { useState } from 'react';
import Botao2 from '../Botao2';
import "./logar.css";

function Logar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'Email' && senha === 'senha') {
            setLoggedIn(true);
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setEmail('');
        setSenha('');
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <p>Bem-vindo, {email}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input className='input3'
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                    <br />
                    <input className='input3'
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        
                    />
                    <br />
                    <Botao2 texto="Entrar" />
                </form>
            )}
        </div>
    );
}

export default Logar;