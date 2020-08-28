import React from 'react';
import LoginForm from '../../components/LoginForm';

function SignUpForm() {
    return (
        <LoginForm 
            title="Cadastro"
            subtitle="Crie um login usando a sua chave de acesso"
            fields={[
                {label: 'Chave de acesso', name: 'key', placeholder: 'Insira sua chave de acesso'},
                {label: 'Login', name: 'login', placeholder: 'Criar um login'},
                {label: 'Senha', name: 'password', placeholder: 'Criar uma senha'},
            ]}
            signUpPage={true}
        />  
    )
}

export default SignUpForm;