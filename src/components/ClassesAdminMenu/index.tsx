import React from 'react';
import Form from '../Form';

function ClassesAdminMenu() {
    return (
        <div className="columns">
            <div className="column col-6">
                <h3 className="text-success">Criar nova turma</h3>
                <Form
                    buttonMessage="Criar nova turma"
                    fields={[
                        {placeholder: "Nome da turma", label: "", name: "cname"},
                    ]} 
                />
            </div>
                <div className="column col-6">
                <h3 className="text-primary">Buscar turma</h3>
                <Form
                    buttonMessage="Buscar"
                    buttonMessageSubmitButtonColor="primary"
                    fields={[
                        {placeholder: "Nome da turma", label: "",  name: "tname"},
                    ]} 
                />
            </div>
        </div>
    );
}

export default ClassesAdminMenu;