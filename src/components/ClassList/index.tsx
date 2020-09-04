import React from 'react';
import { ClassItemProps } from '../ClassItem';
import ClassItem from '../ClassItem';
import PaginationList from '../PaginationList';

interface ClassListProps {
    numberOfPages: number;
    classes: Array<ClassItemProps>;
}

const ClassList: React.FC<ClassListProps> = ({ classes, numberOfPages }) => {

    return (
        <PaginationList link="Admin/turmas" numberOfPages={numberOfPages}>
            {
                classes.map( (classItem, index) => {
                    return (
                        <ClassItem
                            key={index}
                            title={classItem.title}
                            subtitle={classItem.subtitle}
                            description={classItem.description}
                        />
                    )
                })
            }
        </PaginationList>
            
    );
}

export default ClassList;