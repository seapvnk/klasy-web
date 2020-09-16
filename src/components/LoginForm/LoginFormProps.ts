import { FormSubmitProps } from '../Form';
import { FormFieldProps } from '../FormField';

export interface LoginFormProps {
  title: string;
  fields: Array<FormFieldProps>;
  subtitle?: string;
  signUpPage?: boolean;
  onSubmitForm?: FormSubmitProps;
}
