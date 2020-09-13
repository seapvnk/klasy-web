import React from 'react';
import LoginForm from '../../components/LoginForm';

function Login() {
    return (
        <LoginForm 
            title="Funcionários"
            subtitle="Área destinada a funcionários da escola"
            fields={[
                {label: 'Login', name: 'login'},
                {label: 'Senha', name: 'password'},
            ]}
        />  
    )
}

export default Login;