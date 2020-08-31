import React from 'react';
import 'spectre.css'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

interface NavbarProps {
    navbarLight?: boolean;
    backTo?: string
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const textLogo = {
        fontSize: '1.2rem',
    }

    const backIconStyle = {
        fontSize: '1.4rem',
    }

    const navbarStyle = {
        height: '2.5rem',
        backgroundColor: !!props.navbarLight? 'white': 'initial',
    }
    
    return(
        <div className="div">

            <nav style={navbarStyle} className={`navbar container ${props.navbarLight?? "bg-primary"}`}>
            
                <section className="navbar-section">
                    <span style={textLogo} className={`navbar-brand mr-2 text-bold ${!!props.navbarLight? "text-primary" : "text-light"}`}>Klasy</span>
                </section>
                
                {
                    !!props.backTo ? 
                    <Link style={backIconStyle} to={`${props.backTo}`} className="btn-link mr-2 text-light">
                        <BsArrowLeft />
                    </Link> : ""
                }
                
            </nav>
            
            <div className="container">
                {props.children}
            </div>

        </div>
    );
}

export default Navbar;


