import React from 'react';
import EmployeePage from '../EmployeePage';

interface AdminPageProps {
    adminSection?: string;
}

const AdminPage: React.FC<AdminPageProps> = props => {
    const adminSections = [
        "Pessoas",
        "Turmas",
        "Acesso"
    ];
    return (
        <EmployeePage 
            employeeType="Admin"
            sections={adminSections}
            currentSection={props.adminSection}
        >
            {props.children}
        </EmployeePage>
    );
}

export default AdminPage;