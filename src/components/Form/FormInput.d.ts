import * as React from 'react';
import { Omit } from '../../index';

declare namespace FormInput {
    interface IFormInputProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'onChange'> {
      icon?: string;
      position?: "append" | "prepend";
      valid?: boolean;
      tick?: boolean;
      invalid?: boolean;
      cross?: boolean;
      feedback?: string;
      name?: string;
      disabled?: boolean;
      readOnly?: boolean;
      onChange?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
      placeholder?: string;
      type?: "checkbox" | "text" | "email" | "password";
      value?: string | number | boolean;
    }
    type Props = IFormInputProps<HTMLElement>; // TODO: not sure if `React.Fragment or div`
    type Component = React.StatelessComponent<Props>;
}
declare const FormInput: FormInput.Component;
export = FormInput;
