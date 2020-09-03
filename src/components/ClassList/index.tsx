import React from 'react';
import Pagination from '../Pagination';
import { ClassItemProps } from '../ClassItem';
import ClassItem from '../ClassItem';

interface ClassListProps {
    classes: Array<ClassItemProps>;
}

const ClassList: React.FC<ClassListProps> = ({ classes }) => {
    const classListStyle = {
        marginTop: '1rem',
        maxWidth: '100%',
    };

    return (
        <div style={classListStyle} className="container">
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
            <Pagination link="turmas" numberOfPages={6} />
        </div>
    );
}

export default ClassList;