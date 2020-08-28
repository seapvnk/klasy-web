import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import StudentForm from './pages/StudentForm';
import EmployeeForm from './pages/EmployeeForm';
import SignUpForm from './pages/SignUpForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/login-alunos" component={StudentForm} />
            <Route path="/login-funcionarios" component={EmployeeForm} />
            <Route path="/cadastro" component={SignUpForm} />
        </BrowserRouter>
    );
}

export default Routes;
