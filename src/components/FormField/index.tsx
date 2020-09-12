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

const FormField: React.FC<FormFieldProps> = ({ name, label, placeholder, value, onChangeFormValue, fieldIndex }) => {

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

            <input
                className="form-input"
                type="text"
                name={name}
                onChange={event => handleChange(event.target.value)}
                placeholder={placeholder?? label}
                value={formValue?? ''}
            />
        </div>
    );
}

export type {FormFieldProps};
export default FormField;