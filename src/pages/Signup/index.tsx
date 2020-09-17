import React from 'react';
import LoginForm from '../../components/LoginForm';
import api from '../../services/api';

function Signup() {
    // Handle sign up action
    async function handleSignup( [ key, name, bio, username, password ] : Array<string>) {
        api.post('user', { key, name, bio, username, password })
        .then((response) => {
            if (response.status === 400) {
                // Account not created
                alert('Chave inválida ou expirada');
            } else {
                // Account created
                alert('Conta criada com sucesso');
            }
        });
    }
    return (
        <LoginForm 
            title="Cadastro"
            subtitle="Crie um login usando a sua chave de acesso"
            onSubmitForm={{
                submitFunction: handleSignup,
                submitFunctionsArgs: {},
            }}
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