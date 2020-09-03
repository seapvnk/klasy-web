import React from 'react';
import Pagination from '../Pagination';

interface ClassListProps {
    todo?: string;
}

const ClassList: React.FC<ClassListProps> = ({ children }) => {
    const classListStyle = {
        marginTop: '1rem',
        maxWidth: '100%',
    };

    return (
        <div style={classListStyle} className="container">
            {children}
            <Pagination link="turmas" numberOfPages={6} />
        </div>
    );
}

export default ClassList;