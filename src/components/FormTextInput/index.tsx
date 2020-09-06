import { FormFields } from "../Form";
import React, { useState } from "react";

const FormTextInput: React.FC<FormFields> = ({ name, label, placeholder, value, onChangeFormValue, fieldIndex }) => {

    const [ formValue, setFormValue ] = useState(value);
    
    function handleChange(newValue: string) {
        if (onChangeFormValue) {
            onChangeFormValue(fieldIndex, newValue)
        }
        setFormValue(newValue)
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

export default FormTextInput;