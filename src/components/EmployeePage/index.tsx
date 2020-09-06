import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';

import styles from './styles';

interface EmployeePageProps {
    employeeType: string;
    sections: Array<string>;
    currentSection?: string;
}

const EmployeePage: React.FC<EmployeePageProps> = ({ employeeType, sections, currentSection, children }) => {
    const activeSection = currentSection?? sections[0];
    return (
        <section style={styles.fullscreen} className="bg-gray">
            <div style={styles.employeePageTopBar} className="p-fixed">
                <Navbar navbarLight={true}>
                    <Breadcrumb address={`${employeeType}/${currentSection?? ''}`} />
                </Navbar>

                <ul style={{margin: 0}} className="tab tab-block">
                    {
                        sections.map(section => {
                            const isCurrentSection = section !== sections[0];
                            const employeeAreaHome = `/${employeeType}/${sections[0]}`;
                            const employeeAreaTab = `/${employeeType}/${section.toLowerCase()}`;

                            return (
                                <li key={`li-${employeeType}-${section}`} className="tab-item">
                                    <Link 
                                        to={isCurrentSection ?  employeeAreaTab : employeeAreaHome}
                                        className={section === activeSection? 'active' : ''}
                                    >
                                        {section}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div className="container bg-gray">
            
            <div style={styles.separator}></div>
                { children }
            </div>
            
        </section>

    );
}

export default EmployeePage;