import React from 'react';
import 'spectre.css';

import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

function Landing() {

  const fullscreen = {
    padding: '0px',
    margin: '0px',
    height: '100vh',
  };
  
  const pageBody = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  };
  
  const textLarge = {
    fontSize: '2.8rem',
  }
  
  return (
    <div style={fullscreen} className="bg-primary">
      <Navbar />

      <div className="container">
        <div style={pageBody}>
          <div className="hero">
            <div className="hero-body">
                <h1 style={textLarge}>Klasy EAD, <br/> sua escola online.</h1>
                <p>
                  Tornando a educação a distância uma opção viável.
                </p>
              </div>
            </div>

            <div className="bg-light">
              <Link to="/entrar" className="btn btn-lg">
                  Entrar
              </Link>

              <Link to="/registro" className="btn btn-success btn-lg">
                  Registrar 
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Landing;