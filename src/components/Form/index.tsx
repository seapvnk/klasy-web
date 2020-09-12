import React, { CSSProperties } from 'react';
import FormField, {FormFieldProps} from '../FormField';



interface FormSubmitProps {
  submitFunction: Function;
  submitFunctionsArgs: Object;
}

interface FormProps {
    fields: Array<FormFieldProps>;
    buttonMessage: string;
    styles?: CSSProperties;
    buttonMessageSubmitButtonColor?: string;
    onSubmitForm?: FormSubmitProps;
}

const Form: React.FC<FormProps> = ({ buttonMessage, fields, styles, buttonMessageSubmitButtonColor, onSubmitForm }) => {
    const formValues = fields;
    
    // Handle submit function
    function handleFormSubmit(event: any) {
      event.preventDefault();
      if (onSubmitForm) {
        onSubmitForm.submitFunction(formValues.map(( { value }: FormFieldProps) => value ));
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
                    <FormField
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

export type { FormSubmitProps };
export default Form;