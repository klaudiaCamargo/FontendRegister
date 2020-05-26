import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Usuario from './paginas/Usuario';
import Produto from './paginas/Produto';
import Fornecedor from './paginas/Fornecedor';



function Routes(){

    return (
        <BrowserRouter>
            <Switch>

                <Route path='/' exact={true} component={Login}/>
                <Route path='/cadastrar' exact={true} component={Cadastro}/>
                <Route path='/Perfil' exact={true} component={Perfil}/>
                <Route path='/Usuario' exact={true} component={Usuario}/>
                <Route path='/Produto' exact={true} component={Produto}/>
                <Route path='/Fornecedor' exact={true} component={Fornecedor}/>
            </Switch>

        </BrowserRouter>
        
        )}


export default Routes;