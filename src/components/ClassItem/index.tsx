import React from 'react';
import Modal from '../Modal';
import Form from '../Form';
import AdminClassOptionsModal from '../AdminClassOptionsModal';

interface ClassItemProps {
    title: string;
    subtitle?: string;
    description?: string;
}

const ClassItem: React.FC<ClassItemProps> = ({ title, description, subtitle }) => {
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
                    openModalButtonTitle="Novo professor"
                    openModalButtonClass="primary"
                >
                    <Form
                        fields={[
                            {label: 'Professor', placeholder: 'nome',  name: 'materia'}
                        ]}
                        buttonMessage="Novo professor"
                    />
                </Modal>

                <span style={{marginRight: '5px'}}></span>
                
                <AdminClassOptionsModal
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