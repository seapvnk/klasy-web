import React from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {
    currentPage: number;
    numberOfPages: number;
    link: string;
}

const Pagination: React.FC<PaginationProps> = ({ link, numberOfPages, currentPage }) => {
    currentPage = currentPage ?? 1;
    const paginationStyle = {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    };

    const defaultPageLink = `/${link}/${currentPage}`;

    const hasPrevious = currentPage >= 2;
    const hasNext = currentPage <= numberOfPages - 1;

    const previous =  hasPrevious ? `/${link}/${currentPage-1}` : defaultPageLink;
    const next =  hasNext ? `/${link}/${currentPage+1}` : defaultPageLink;

    const pages = [];
    for (let page = 1; page <= numberOfPages; page++) {
        const isCurrentPage = currentPage === page;
        const pageStatus = isCurrentPage ? 'disabled' : '';
        const pageItemClasses = `page-item ${pageStatus}`;
        const pageItemLink = `/${link}/${page}`;

        pages.push(
            <li className={pageItemClasses} key={1 + page}>
                <Link to={pageItemLink}>{ page }</Link>
            </li>
        );
    }

    return (
        <div style={paginationStyle}>
            <ul className="pagination">
                <li className="page-item" key={1}>
                    <Link to={previous} className="-1">
                        Previous
                    </Link>
                </li>
                { pages }
                <li className="page-item" key={2 + numberOfPages}>
                    <Link to={next} className="+1" >
                        Next
                    </Link>
                </li>
            </ul>
        </div>
    );    
}

export default Pagination;