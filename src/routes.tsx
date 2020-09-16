import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminRoutes from './pages/AdminRoutes';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/entrar" component={Login} />
            <Route path="/registro" component={Signup} />
            <Route path="/admin" component={AdminRoutes}/>
        </BrowserRouter>
    );
}

export default Routes;
