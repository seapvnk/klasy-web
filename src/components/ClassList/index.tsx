import React, { useState, useEffect } from 'react';
import { ClassItemProps } from '../ClassItem';
import ClassItem from '../ClassItem';
import PaginationList from '../PaginationList';
import UpdateOperation from '../../utils/UpdateOperation';
import { updateOperationDeleteClass, updateOperationEditClass } from './updateFunctions';

interface ClassListProps {
    numberOfPages: number;
    classes: Array<ClassItemProps>;
}

const ClassList: React.FC<ClassListProps> = ({ classes, numberOfPages }) => {
    const [classesData, setClassesData] = useState(classes);
    const [operation, setOperation] = useState(UpdateOperation.noOperation);
    const [operationData, setOperationData] = useState({
        title: '',
        subtitle: '',
        description: '',
        id: -1,
    });

    // Update functions
    const deleteClass = updateOperationDeleteClass(setOperation, setOperationData);    
    const editClass = updateOperationEditClass(setOperation, setOperationData);    

    useEffect(() => {
        // Check for deletions.
        if (operation === UpdateOperation.Delete) {
            setClassesData(classesData.filter(currentClass => currentClass.id !== operationData.id));
        }

        // Check for editions.
        if (operation === UpdateOperation.Edit) {
            setClassesData(classesData.map(currentClass => {
                if (currentClass.id === operationData.id) {
                    currentClass.title = operationData.title;
                    currentClass.subtitle = operationData.subtitle;
                    currentClass.description = operationData.description;
                }
                return currentClass;
            }));
        }

        // Clear operation command.
        setOperation(UpdateOperation.noOperation);
    }, [    operation, 
            operationData.title,
            operationData.subtitle,
            operationData.description,
            operationData.id,
            classesData,
    ]);

    return (
        <PaginationList link="Admin/turmas" numberOfPages={numberOfPages}>
            {
                classesData.map( ({ id, title, subtitle, description }, index) => {
                    return (
                        <ClassItem
                            key={index}
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            onRemove={() => deleteClass(id)}
                            handleEdit={editClass}
                        />
                    )
                })
            }
        </PaginationList>
            
    );
}

export default ClassList;