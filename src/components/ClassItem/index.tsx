import React from 'react';
import Modal from '../Modal';
import Form from '../Form';
import AdminClassOptionsModal from '../AdminClassOptionsModal';

interface ClassItemProps {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    onRemove?: Function;
    handleEdit?: Function
}

const ClassItem: React.FC<ClassItemProps> = ({ id, title, description, subtitle, onRemove, handleEdit }) => {
    
    // Handle editing
    type ClassUpdateForm = any;

    function handleEditing( [ title, subtitle, description ]: ClassUpdateForm  ) {
        if (handleEdit) {
            handleEdit(id, title, subtitle, description);
        }
    }

    return (
        <div className="card" style={{maxWidth: '100%', marginBottom: '1rem'}}>
            <div className="card-header">
                <div className="card-title h5">{ title }</div>
                <div className="card-subtitle text-gray">{ subtitle ?? '' }</div>
            </div>
            <div className="card-body">
                {description ?? ''}
            </div>
            <div className="card-footer">
                <Modal
                    title={`Inserir professor na turma "${title}"`}
                    openModalButtonTitle="Adicionar professor"
                    openModalButtonClass="primary"
                >
                    <Form
                        fields={[
                            {label: 'Professor', placeholder: 'Insira o login do professor',  name: 'materia', type: 'number'}
                        ]}
                        buttonMessage="Adicionar"
                    />
                </Modal>

                <span style={{marginRight: '5px'}}></span>
                
                <AdminClassOptionsModal
                    key={id}
                    formSubmit={{
                        submitFunction: handleEditing,
                        submitFunctionsArgs: ({ title, subtitle, description}),
                    }}
                    removeFunction={onRemove}
                    title={title} 
                    subtitle={subtitle ?? ''} 
                    description={description ?? ''}

                />
            </div>
        </div>
    );
}

export type { ClassItemProps };
export default ClassItem;