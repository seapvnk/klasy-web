import React from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {
    currentPage?: number;
    numberOfPages: number;
    link: string;
}

const Pagination: React.FC<PaginationProps> = ({ link, numberOfPages, currentPage }) => {
    currentPage = currentPage ?? 1; // TODO
    return (
        <ul className="pagination">
            <li className="page-item">
                <Link 
                    to={currentPage > 2 ? `/${link}/${currentPage-1}` : `/${link}/${currentPage-1}`} 
                    className="-1">
                    Previous
                </Link>
            </li>
            {
                Array.from(Array(numberOfPages).keys()).map(page => {
                    return (
                        <li className={`page-item ${currentPage === page? 'disabled' : ''}`}>
                            <Link to={`/${link}/${page}`}>{ page }</Link>
                        </li>
                    );
                })
            }
            <li className="page-item">
                <Link 
                    to={currentPage > 2 ? `/${link}/${currentPage-1}` : `/${link}/${currentPage-1}`} 
                    className="-1">
                    Next
                </Link>
            </li>
        </ul>
    );    
}

export default Pagination;