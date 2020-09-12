import React from 'react';
import AdminPage from '../../../components/AdminPage';
import Form from '../../../components/Form';

function AdminManageClasses() {

    return (
        <AdminPage adminSection="Acesso">
            <h1 className="text-center text-primary">Criar chave de acesso</h1>
            <div className="container">
                <Form 
                    fields={[
                        {label: "Chave", name: "key", placeholder: "Insira a nova chave"},
                        {label: "Tipo de acesso", name: "type", placeholder: "Tipo de acesso", type: 'select', options: {
                            
                            fields: [
                                {name: 'Professor', value: 1},
                                {name: 'Estudante', value: 2},
                                {name: 'Administrador', value: 3},
                            ],
                        }},
                        {label: "Quantidade", name: "quantity", placeholder: "Limite de uso", type: 'number', options: {
                            min: 1,
                        }},
                    ]}
                    buttonMessage="Gerar chave"
                />
            </div>
        </AdminPage>
    )

}

export default AdminManageClasses;