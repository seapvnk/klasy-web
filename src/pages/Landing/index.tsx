import React from 'react';
import 'spectre.css';

import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

function Landing() {

  const fullscreen = {
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
              <Link to="/login-alunos" className="btn btn-lg">
                  Sou aluno  
              </Link>

              <Link to="/login-funcionarios" className="btn btn-success btn-lg">
                  Sou funcionário 
              </Link>
            </div>
            <br/>
            <Link to="/cadastro" className="text-light">Não possui login? Obter acesso.</Link>
          </div>
        </div>
    </div>
  );
}

export default Landing;