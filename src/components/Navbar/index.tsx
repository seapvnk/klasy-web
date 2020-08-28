import React from 'react';
import 'spectre.css'
import { Link } from 'react-router-dom';

interface NavbarProps {
    backTo?: string
}

const Navbar: React.FC<NavbarProps> = props => {
    const textLogo = {
        fontSize: '1.6rem',
    }

    const backIconStyle = {
        fontSize: '1.4rem',
    }

    return(
        <nav className="navbar container bg-primary">
            <section className="navbar-section">
                <a href="#" style={textLogo} className="navbar-brand mr-2 text-bold text-light">Klasy</a>
            </section>
            {!!props.backTo ? <Link style={backIconStyle} to={`${props.backTo}`} className="btn-link mr-2 text-light">&larr;</Link> : ""}
        </nav>
    );
}

export default Navbar;


