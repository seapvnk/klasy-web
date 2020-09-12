import React, { useState } from "react";

interface FormFieldProps {
    label: string;
    name: string;
    placeholder?: string;
    value?: string;
    fieldIndex?: number;
    onChangeFormValue?: Function;
    type?: string;
    options?: any;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, placeholder, value, onChangeFormValue, fieldIndex, type, options }) => {

    const [ formValue, setFormValue ] = useState(value);
    
    function handleChange(newValue: string) {
        if (onChangeFormValue) {
            onChangeFormValue(fieldIndex, newValue);
        }
        setFormValue(newValue);
    }

    return (
        <div className="form-group">

            <label className="form-label" htmlFor={`i-${name}`}>
                { label }
            </label>
            {   type?.toLocaleLowerCase() !== 'select'?
                <input
                    className="form-input"
                    type={type?? "text"}
                    name={name}
                    onChange={event => handleChange(event.target.value)}
                    placeholder={placeholder?? label}
                    min={options?.min?? 0}
                    max={options?.max?? ''}
                    value={formValue?? ''}
                /> :
                <select
                    className="form-input"
                    name={name}
                    onChange={event => handleChange(event.target.value)}
                    placeholder={placeholder?? label}
                    value={formValue?? 0}
                >
                    {
                        options.fields.map( (currentOption: any) => {
                            return <option value={currentOption?.value}> { currentOption?.name } </option>
                        })
                    }
                </select>
            }
        </div>
    );
}

export type {FormFieldProps};
export default FormField;