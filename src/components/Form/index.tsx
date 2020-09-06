import React, { CSSProperties } from 'react';

interface FormFields {
    label: string;
    name: string;
    placeholder?: string;
    value?: string;
}

interface FormProps {
    fields: Array<FormFields>;
    buttonMessage: string;
    styles?: CSSProperties;
    buttonMessageSubmitButtonColor?: string;
}

const Form: React.FC<FormProps> = ({buttonMessage, fields, styles, buttonMessageSubmitButtonColor}) => {
    return (
            <form style={styles?? {} }>
              {
                fields.map(({name, label, placeholder, value}, index) => {
                  return (
                    <div className="form-group" key={index}>

                      <label className="form-label" htmlFor={`i-${index}`}>
                        {label}
                      </label>

                      <input
                        className="form-input"
                        type="text"
                        name={name}
                        id={`i-${index}`} 
                        placeholder={placeholder?? label}
                        value={value?? ''}
                      />
                    </div>
                  ); 
                })
              }
              
              <button className={`btn btn-${buttonMessageSubmitButtonColor?? 'success'} btn-lg`}>{ buttonMessage }</button>

            </form>
    );
}

export type {FormFields};
export default Form;