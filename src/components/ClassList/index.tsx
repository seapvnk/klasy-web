import React from 'react';
import Pagination from '../Pagination';
import { ClassItemProps } from '../ClassItem';
import ClassItem from '../ClassItem';
import { useParams } from 'react-router-dom';

interface ClassListProps {
    classes: Array<ClassItemProps>;
}

const ClassList: React.FC<ClassListProps> = ({ classes }) => {
    const classListStyle = {
        marginTop: '1rem',
        maxWidth: '100%',
    };

    const params = useParams<{page: string}>();
    const page = parseInt(params.page);

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
            <Pagination link="Admin/turmas" currentPage={page} numberOfPages={6} />
        </div>
    );
}

export default ClassList;