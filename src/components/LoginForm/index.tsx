import React from 'react';
import { Link } from 'react-router-dom';
import 'spectre.css';
import Form from '../Form';
import Navbar from '../Navbar';
import { LoginFormProps } from './LoginFormProps';
import styles from './styles';


const LoginForm: React.FC<LoginFormProps> = ({ title, fields, subtitle, signUpPage, onSubmitForm }) => {
  const { fullscreen, pageBody, formStyle, textLarge } = styles;

  return (
    <div style={fullscreen} className="bg-primary">
      <Navbar backTo="/" />
      <div className="container">
          <div style={pageBody}>
            <h1 style={textLarge}>{title}</h1>
            <p className="text-muted">{subtitle}</p>
            
            <Form
              onSubmitForm={onSubmitForm}
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