import React from 'react';

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
                            {subsection}
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Breadcrumb;