import React, {useState} from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            telefone
        };

        try{
      

            const response = await api.post('usuario', data);
            const id = response.data.id;
            alert('Seu id de acesso: '+ id);
     
        }catch (error) {
            alert('Erro no Cadastro ');

        }
    }

    return (

        <div className='cadastro-container'> 

            <form className='form' action="">

                <h1>Meu Cadastro</h1> 
                <hr></hr>

                <p>Nome:</p> 
                <input
                        type= 'text'
                        placeholder='Digite seu nome... ' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>
                
                <p>Email:</p>   
                <input
                        type='text'
                        placeholder='Digite seu Email... ' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                
                <p>Telefone:</p>
                <input
                        type='text'
                        placeholder='Digite seu Telefone... ' 
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/>


            
                <hr></hr>
                <button className='button' type='submit'>Cadastrar</button>

                <p> </p> 
                <button type='submit'>Ja tenho conta</button>

            </form>        

        </div>

    )

}


export default Cadastro;