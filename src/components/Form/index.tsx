import React, { CSSProperties, useState } from 'react';
import FormTextInput from '../FormTextInput';

interface FormFields {
    label: string;
    name: string;
    placeholder?: string;
    value?: string;
    fieldIndex?: number;
    onChangeFormValue?: Function;
}

interface FormSubmitProps {
  submitFunction: Function;
  submitFunctionsArgs: Object;
}

interface FormProps {
    fields: Array<FormFields>;
    buttonMessage: string;
    styles?: CSSProperties;
    buttonMessageSubmitButtonColor?: string;
    onSubmitForm?: FormSubmitProps;
}

const Form: React.FC<FormProps> = ({ buttonMessage, fields, styles, buttonMessageSubmitButtonColor, onSubmitForm }) => {
    const [ formValues, setFormValues ] = useState(fields);
    
    // Handle submit function
    function handleFormSubmit(event: any) {
      event.preventDefault();
      if (onSubmitForm) {
        onSubmitForm.submitFunction(formValues.map(( { value }: FormFields) => value ));
      }
    }

    // Update form state
    function handleValueChange(index: number, updatedValue: string) {
      return formValues.map((field, fieldIndex) => {
        if (index === fieldIndex) {
          field.value = updatedValue;
        }
        return field;
      });
    }

    return (
            <form style={styles?? {} } onSubmit={handleFormSubmit}>
              {
                fields.map(({ name, label, placeholder }, index) => {
                  return (
                    <FormTextInput
                      key={index}
                      fieldIndex={index}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      value={formValues[index].value}
                      onChangeFormValue={handleValueChange}
                    />
                  ); 
                })
              }
              
              <button
                className={`btn btn-${buttonMessageSubmitButtonColor?? 'success'} btn-lg`}
              >
                { buttonMessage }
              </button>

            </form>
    );
}

export type { FormFields, FormSubmitProps };
export default Form;