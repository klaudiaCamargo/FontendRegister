import React, {useState} from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Fornecedor(){

    const [razao_social, setRazao_social] = useState('');
    const [nome_fantasia, setNome_fantasia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleFornecedor(e) {
        e.preventDefault();

        const data = {
            razao_social,
            nome_fantasia,
            endereco,
            cep,
            cidade,
            cnpj,
            telefone,
            email
        };

        try{
      

            const response = await api.post('fornecedor', data);
            const id = response.data.id;
            alert('Seu id de acesso: '+ id);
     
        }catch (error) {
            alert('Erro no Cadastro ');

        }
    }

    return (

        <div className='cadastro-container'> 

            <form className='form' action="">

                <h1>_____ Cadastro de Fornecedor _____</h1> 
                <hr></hr>

                <p>Razao social:</p> 
                <input
                        type= 'text'
                        placeholder='Digite a razao social.. ' 
                        value={razao_social}
                        onChange={e => setRazao_social(e.target.value)}/>
                
                <p>Nome Fantasia:</p>   
                <input
                        type='text'
                        placeholder='Digite seu nome fantasia... ' 
                        value={nome_fantasia}
                        onChange={e => setNome_fantasia(e.target.value)}/>

                <p>Endereco:</p>
                <input
                        type='text'
                        placeholder='Digite seu Endereco... ' 
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}/>

                <p>Cep:</p>
                <input
                        type='text'
                        placeholder='Digite seu cep... ' 
                        value={cep}
                        onChange={e => setCep(e.target.value)}/>

                <p>Cidade:</p>
                <input
                        type='text'
                        placeholder='Digite sua cidade.. ' 
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}/>
                
                <p>CNPJ:</p>
                <input
                        type='text'
                        placeholder='Digite seu cnpj.. ' 
                        value={cnpj}
                        onChange={e => setCNPJ(e.target.value)}/>

                <p>Telefone:</p>
                <input
                        type='text'
                        placeholder='Digite seu Telefone... ' 
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/>
                
                <p>Email:</p>
                <input
                        type='text'
                        placeholder='Digite seu email... ' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>


            
                <hr></hr>
                <button className='button' type='submit'>Cadastrar</button>

                <p> </p> 
                <button type='submit'>Ja tenho conta</button>

            </form>        

        </div>

    )

}


export default Fornecedor;