import Modal from "../Modal"
import React from "react"
import Form, { FormSubmitProps } from "../Form"

interface AdminClassOptionsModalProps {
    title: string;
    subtitle: string;
    description: string;
    formSubmit: FormSubmitProps;
    removeFunction?: Function;
}


const AdminClassOptionsModal: React.FC<AdminClassOptionsModalProps> = ({ title, subtitle, description, formSubmit, removeFunction }) => {
    function handleDeleteClass() {
        // TODO: Write a confirmation modal
        if (removeFunction) {
            removeFunction();
        }
    }

    return (
        <Modal
            title={`Ações na turma "${title}"`}
            openModalButtonTitle="Opções" >
            <Modal
                title={`Editar "${title}"`}
                openModalButtonTitle="Editar"
                openModalButtonClass="link bg-warning text-light" >
                <Form
                    onSubmitForm={formSubmit}
                    buttonMessage="Salvar alterações"
                    fields={[
                        {label: 'Título', name: 'title', placeholder: 'Título da aula', value: title},
                        {label: 'Subtítulo', name: 'subtitle', placeholder: 'Subtítulo da aula', value: subtitle},
                        {label: 'Descrição', name: 'description', placeholder: 'Breve descrição a respeito', value: description},
                    ]}
                />

            </Modal>
            <button style={{border: 'none', marginLeft: '5px'}}  className="btn btn-error" onClick={handleDeleteClass} >Excluir</button>
        </Modal>
    )
}

export default AdminClassOptionsModal;