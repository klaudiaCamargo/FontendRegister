import React from 'react';
import './style.css';
import {useHistory} from 'react-router-dom';

function Perfil(){
    const history = useHistory();
    function clearCache() {
        

        localStorage.clear();
        history.push('/');
    }


    return (

        <div className='perfil-container'> 
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>

             <form className='form'>

                <h1>Perfil</h1> 
                <p>Olá {localStorage.getItem('email')}</p>
                <hr></hr>
                <p>Nome completo:</p> 
                <input
                type= 'nome'
                placeholder='Digite seu nome... ' />
                
                <p>Email:</p>   
                <input
                type='text'
                placeholder='Digite seu Email... ' />
                
                <p>Telefone:</p>
                <input
                type='text'
                placeholder='Digite seu Telefone... ' />

                <p>Cidade:</p>
                <input
                type='text'
                placeholder='Digite seu Cidade... ' />

                <p>Estado:</p>
                <input
                type='text'
                placeholder='Digite seu Estado... ' />

                <p>Senha:</p>
                <input
                type='text'
                placeholder='Digite seu Senha... ' />
                <hr></hr>

                
                    <p></p>
                    <div class="row">
                        <div class="col-sm">
                        <button type='submit'>Salvar</button>
                        </div>
                        <div class="col-sm">
                        <button type='submit'>Excluir</button>
                        </div>
                        <div class="col-sm">
                        <button onClick={clearCache}>Logout</button>
                        </div>
                    </div>
              
                
            </form>        

        </div>

    )

}


export default Perfil;