import React from 'react';
import 'spectre.css';

import Navbar from '../Navbar';
import Form from '../Form';
import {FormFieldProps} from '../FormField';
import styles from './styles';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  title: string;
  fields: Array<FormFieldProps>
  subtitle?: string;
  signUpPage?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ title, fields, subtitle, signUpPage }) => {
  const { fullscreen, pageBody, formStyle, textLarge } = styles;

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