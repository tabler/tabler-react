import * as React from 'react';

declare namespace FormTextInput {
    export interface IFormTextInputProps<T> extends React.HTMLProps<T> {
      type?: "checkbox" | "text" | "email" | "password";
      label: string;
      placeHolder: string;
    }
    export type FormTextInputProps = IFormTextInputProps<HTMLDivElement>;
    export interface IFormTextInputState {
      value: string | number;
    }
    export type FormTextInputState = IFormTextInputState;
}
declare class FormTextInput extends React.Component<FormTextInput.FormTextInputProps, FormTextInput.FormTextInputState> { }
export = FormTextInput;
