import React from 'react';
import Pagination from '../Pagination';
import { useParams } from 'react-router-dom';

interface PaginationListProps {
    numberOfPages: number;
    link: string;
}

const PaginationList: React.FC<PaginationListProps> = ({ numberOfPages, link, children }) => {
    const params = useParams<{page: string}>();
    const page = parseInt(params.page);

    return (
        <div 
            style={{
                marginTop: '1rem',
                maxWidth: '100%',
            }} 
            className="container"
        >
            { children }
            <Pagination link={link} currentPage={page} numberOfPages={numberOfPages} />
        </div>
    );
}

export default PaginationList;