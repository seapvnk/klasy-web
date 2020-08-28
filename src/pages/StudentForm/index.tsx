import React from 'react';
import LoginForm from '../../components/LoginForm';

function StudentForm() {
    return (
        <LoginForm 
            title="Alunos"
            subtitle="Área destinada a alunos e pais"
            fields={[
                {label: 'Login', name: 'login'},
                {label: 'Senha', name: 'password'},
            ]}
        />  
    )
}

export default StudentForm;