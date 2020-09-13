import React from 'react';
import LoginForm from '../../components/LoginForm';

function Signup() {
    return (
        <LoginForm 
            title="Cadastro"
            subtitle="Crie um login usando a sua chave de acesso"
            fields={[
                {label: 'Chave de acesso', name: 'key', placeholder: 'Insira sua chave de acesso'},
                {label: 'Nome', name: 'name', placeholder: 'Seu nome'},
                {label: 'Descrição/bio', name: 'bio', placeholder: 'Breve descrição'},
                {label: 'Nome de usuário/login', name: 'login', placeholder: 'Criar um login'},
                {label: 'Senha', name: 'password', placeholder: 'Criar uma senha'},
            ]}
            signUpPage={true}
        />  
    )
}

export default Signup;