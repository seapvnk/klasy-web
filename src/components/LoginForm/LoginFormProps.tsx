import { FormFieldProps } from '../FormField';

export interface LoginFormProps {
  title: string;
  fields: Array<FormFieldProps>;
  subtitle?: string;
  signUpPage?: boolean;
}
