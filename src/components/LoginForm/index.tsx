import React from 'react';
import 'spectre.css';

import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  title: string;
  fields: Array<{
    label: string;
    placeholder?: string;
    name: string;
  }>
  subtitle?: string;
  signUpPage?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = props => {

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
            <h1 style={textLarge}>{props.title}</h1>
            <p className="text-muted">{props.subtitle}</p>
            <form style={formStyle}>

              {
                props.fields.map(field => {
                  return (
                    <div className="form-group" key={`${props.title.replace(' ', '_')}-${field.name}`}>
                      <label 
                          className="form-label"
                          htmlFor={`${props.title.replace(' ', '-')}-${field.name}`}
                      >
                        {field.label}
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id={`${props.title.replace(' ', '-')}-${field.name}`} 
                        placeholder={field.placeholder?? field.label}
                      />
                    </div>
                  ); 
                })
              }
              
              <button className="btn btn-success btn-lg">{!props.signUpPage? "Entrar" : "Cadastrar"}</button>
            </form>
            {!props.signUpPage? <Link to="/cadastro" className="text-light">Não possuo login.</Link> : ""}
          </div>
        </div>
    </div>
  );
}

export default LoginForm;