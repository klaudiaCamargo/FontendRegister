import React, {useState} from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Produto(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');


    const history = useHistory();

    async function handleProduto(e) {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            valor
        };

        try{
      

            const response = await api.post('produto', data);
            const id = response.data.id;
            alert('Id do produto: '+ id);
     
        }catch (error) {
            alert('Erro no Cadastro');

        }
    }

    return (

        <div className='cadastro-container'> 

            <form className='form' action="">

                <h1>Cadastro de Produto:</h1> 
                <hr></hr>

                <p>Nome:</p> 
                <input
                        type= 'text'
                        placeholder='Digite nome do produto... ' 
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>

                <p>Descricao:</p>   
                <input
                        type='text'
                        placeholder='Digite descricao do produto... ' 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}/>
                
                <p>Valor:</p>   
                <input
                        type='text'
                        placeholder='Digite valor do produto... ' 
                        value={valor}
                        onChange={e => setValor(e.target.value)}/>

                     

                <hr></hr>
                <button className='button' type='submit'>Cadastrar produto</button>
              
            </form>        

        </div>

    )

}


export default Produto;