import * as React from 'react';



declare namespace FormInput {
    export interface FormInputProps extends React.Props<FormInput> {
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
}
declare class FormInput extends React.Component<FormInput.FormInputProps> { }
export = FormInput;
