import React, { useState, useEffect} from 'react';
import './style.css';
import api from '../services/api';


function Usuario() {

    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        api.get('usuario',{}).then(response => {
            setUsuarios(response.data);
        });
    }, []);

        return (
            
            <div className='lista-container'>

                <h1>Usuarios</h1>
                <hr></hr>
                <p>Total de Usuarios: {usuarios.length}</p>
                <ul>
                    {   usuarios.map(usuario => (
                        <li>
                            <p>Usuario: {usuario.id}</p>
                            <p>Nome: {usuario.nome}</p>
                            <p>Email: {usuario.email}</p>
                            <p>Telefone: {usuario.telefone}</p>
                        </li>

                    ))

                    }

                </ul>
        
            </div>
    );

}


export default Usuario;