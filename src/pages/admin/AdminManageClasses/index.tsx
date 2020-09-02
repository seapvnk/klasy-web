import React from 'react';
import AdminPage from '../../../components/AdminPage';
import Form from '../../../components/Form';
import ClassItem from '../../../components/ClassItem';
import ClassList from '../../../components/ClassList';

function AdminManageClasses() {
    return(
        <AdminPage adminSection="Turmas">
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
            <ClassList>
                <ClassItem 
                    title="Typescript and React"
                    subtitle="React e typescript, muito bom mesmo!"
                    description="Aula de React no front-end utilizando typescript ministrada pelos professores..."
                />
                <ClassItem 
                    title="Typescript and React"
                    subtitle="React e typescript, muito bom mesmo!"
                    description="Aula de React no front-end utilizando typescript ministrada pelos professores..."
                />
                <ClassItem 
                    title="Typescript and React"
                    subtitle="React e typescript, muito bom mesmo!"
                    description="Aula de React no front-end utilizando typescript ministrada pelos professores..."
                />
                <ClassItem 
                    title="Typescript and React"
                    subtitle="React e typescript, muito bom mesmo!"
                    description="Aula de React no front-end utilizando typescript ministrada pelos professores..."
                />
            </ClassList>
        </AdminPage>
    );
}

export default AdminManageClasses;