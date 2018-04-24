import * as React from 'react';

declare namespace FormCheckboxInput {
    export interface IFormCheckboxInputProps<T> extends React.HTMLProps<FormCheckboxInput> {
      label: string;
    }
    export type FormCheckboxInputProps = IFormCheckboxInputProps<HTMLDivElement>;
    export interface IFormCheckboxInputState {
      value: boolean;
    }
    export type FormCheckboxInputState = IFormCheckboxInputState;

}
declare class FormCheckboxInput extends React.Component<FormCheckboxInput.FormCheckboxInputProps, FormCheckboxInput.FormCheckboxInputState> { }
export = FormCheckboxInput;
