import React from 'react';
import 'spectre.css';

import Navbar from '../Navbar';
import Form, {FormFields} from '../Form';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  title: string;
  fields: Array<FormFields>
  subtitle?: string;
  signUpPage?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ title, fields, subtitle, signUpPage }) => {

  const fullscreen = {
    height: '100vh',
  };
  
  const pageBody = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  };
  
  const textLarge = {
    fontSize: '2rem',
    marginTop: '3rem',
  }

  const formStyle = {
    width: '70%',
  }

  return (
    <div style={fullscreen} className="bg-primary">
      <Navbar backTo="/" />
      <div className="container">
          <div style={pageBody}>
            <h1 style={textLarge}>{title}</h1>
            <p className="text-muted">{subtitle}</p>
            
            <Form 
              buttonMessage={!signUpPage? "Entrar" : "Cadastrar"}
              fields={fields}
              styles={formStyle}
            />
          
            {!signUpPage? <Link to="/cadastro" className="text-light">Não possuo login.</Link> : ""}
          
          </div>
        </div>
    </div>
  );
}

export default LoginForm;