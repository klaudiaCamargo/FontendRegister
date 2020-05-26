import './style.css';
import perfil from '../imagens/perfil.png';
import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';


function Login(){

    const [tipo_usuario, setTipo_usuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();

        console.log(tipo_usuario);
        console.log(email);
        console.log(password);

        localStorage.setItem('email', email);

        history.push('/perfil');   //redirecionar 
    
    }



    return (
        <div className='login-container'>
            <form className='form' onSubmit={handleLogin}>

            <p> </p>
            <img className='img' src={perfil} />
             <hr></hr>

             <input
                type='tipo_usuario'
                placeholder='cliente ou fornecedor... '
                value={tipo_usuario}
                onChange={e => setTipo_usuario(e.target.value)}/>

                <input
                    type= 'email'
                    placeholder='Digite seu email... '
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                
                <input
                type='password'
                placeholder='Digite sua senha... '
                value={password}
                onChange={e => setPassword(e.target.value)}/>

                <p> </p>
                <button type='submit'>Logar</button>
            
                <p> </p>
                <button type='submit'>Cadastrar</button>
           
            </form>

        </div>

    );
}


export default Login;