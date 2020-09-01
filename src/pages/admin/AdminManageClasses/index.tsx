import React from 'react';
import AdminPage from '../../../components/AdminPage';
import Form from '../../../components/Form';

function AdminManageClasses() {
    return(
        <AdminPage adminSection="Turmas">
            <Form
                buttonMessage="Criar nova turma"
                fields={[
                    {label: "Nome da turma", name: "name"},
                ]} 
            />
        </AdminPage>
    );
}

export default AdminManageClasses;