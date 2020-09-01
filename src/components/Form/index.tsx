import React, { CSSProperties } from 'react';

interface FormFields {
    label: string;
    placeholder?: string;
    name: string;
}

interface FormProps {
    fields: Array<FormFields>;
    buttonMessage: string;
    styles?: CSSProperties;
}

const Form: React.FC<FormProps> = ({buttonMessage, fields, styles}) => {
    return (
            <form style={styles?? {} }>
              {
                fields.map(({name, label, placeholder}, index) => {
                  return (
                    <div className="form-group" key={index}>

                      <label className="form-label" htmlFor={`i-${index}`}>
                        {label}
                      </label>

                      <input
                        className="form-input"
                        type="text"
                        id={`i-${index}`} 
                        placeholder={placeholder?? label}
                      />
                    </div>
                  ); 
                })
              }
              
              <button className="btn btn-success btn-lg">{buttonMessage}</button>

            </form>
    );
}

export type {FormFields};
export default Form;