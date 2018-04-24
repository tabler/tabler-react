import * as React from 'react';
import { Omit } from '../../index';

declare namespace FormInput {
    export interface IFormInputProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'onChange'> {
      className?: string;
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
    export type FormInputProps = IFormInputProps<HTMLDivElement>;
}
declare class FormInput extends React.Component<FormInput.FormInputProps> { }
export = FormInput;
