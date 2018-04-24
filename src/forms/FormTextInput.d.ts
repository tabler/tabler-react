import * as React from 'react';

declare namespace FormTextInput {
    export interface FormTextInputProps extends React.Props<FormTextInput> {
      type?: "checkbox" | "text" | "email" | "password";
      label: string;
      placeHolder: string;
    }
    export interface FormTextInputState {
      value: string | number;
    }
}
declare class FormTextInput extends React.Component<FormTextInput.FormTextInputProps, FormTextInput.FormTextInputState> { }
export = FormTextInput;
