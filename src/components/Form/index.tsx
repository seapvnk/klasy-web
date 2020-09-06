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
    function handleValueChange(index: number, newValue: string) {
      const newValues = formValues.map((field, vindex) => {
        if (index === vindex) {
          field.value = newValue;
        }
        return field;
      });
      setFormValues(newValues);
    }
    return (
            <form style={styles?? {} } onSubmit={
                e => {
                  e.preventDefault();
                  if (onSubmitForm) {
                    onSubmitForm.submitFunction(formValues.map(( { value }: FormFields) => value ));
                  }
                }
              }>
              {
                fields.map(({ name, label, placeholder, value }, index) => {
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