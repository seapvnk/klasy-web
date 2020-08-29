import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import { Link } from 'react-router-dom';

interface AdminPageProps {
    adminSection?: string;
}

const AdminPage: React.FC<AdminPageProps> = props => {
    const sections = ["Geral", "Pessoas", "Aulas", "Acesso"];
    const activeSection = props.adminSection?? sections[0];

    const fullscreen = {
        height: '100vh',
    };

    const whiteBackground = {
        backgroundColor: 'white',
    };

    return (
        <section style={fullscreen} className="bg-gray">
            <div style={whiteBackground}>
                <Navbar navbarLight={true}>
                    <Breadcrumb address={`admin/${props.adminSection?? ''}`} />
                </Navbar>

                <ul className="tab tab-block">
                    {
                        sections.map(section => {
                            return (
                                <li key={`li-admin-${section}`} className="tab-item">
                                    <Link 
                                        to={section !== sections[0]? `/admin/${section.toLowerCase()}` : '/admin'}
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
                {props.children}
            </div>
            
        </section>

    );
}

export default AdminPage;