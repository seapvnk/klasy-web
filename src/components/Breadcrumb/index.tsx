import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    address: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = props => {
    return (
        <ul className="breadcrumb">
            {
                props.address.split('/').map(subsection => {
                    return (
                        <li key={`li-${subsection}`} className="breadcrumb-item">
                            <Link to={subsection}>{subsection}</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Breadcrumb;