import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';

interface EmployeePageProps {
    employeeType: string;
    sections: Array<string>;
    currentSection?: string;
}

const EmployeePage: React.FC<EmployeePageProps> = props => {
    const activeSection = props.currentSection?? props.sections[0];

    const fullscreen = {
        height: '100vh',
    };

    const separator = {
        paddingTop: '24vh',
    }

    const employeePageTopBar = {
        backgroundColor: 'white',
        width: '100%',
        maxHeight: '22vh',
        display: 'flex',
        flexFlow: 'column',
        justifyItems: 'flex-end',
        zIndex: 2,
    };

    return (
        <section style={fullscreen} className="bg-gray">
            <div style={employeePageTopBar} className="p-fixed">
                <Navbar navbarLight={true}>
                    <Breadcrumb address={`${props.employeeType}/${props.currentSection?? ''}`} />
                </Navbar>

                <ul className="tab tab-block">
                    {
                        props.sections.map(section => {
                            const isCurrentSection = section !== props.sections[0];
                            const employeeAreaHome = `/${props.employeeType}`;
                            const employeeAreaTab = `/${props.employeeType}/${section.toLowerCase()}`;

                            return (
                                <li key={`li-${props.employeeType}-${section}`} className="tab-item">
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
            <div style={separator}></div>
                {props.children}
            </div>
            
        </section>

    );
}

export default EmployeePage;