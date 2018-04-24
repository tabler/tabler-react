import * as React from 'react';

declare namespace FormCheckboxInput {
    export interface FormCheckboxInputProps extends React.Props<FormCheckboxInput> {
      label: string;
    }
    export interface FormCheckboxInputState {
      value: boolean;
    }
}
declare class FormCheckboxInput extends React.Component<FormCheckboxInput.FormCheckboxInputProps, FormCheckboxInput.FormCheckboxInputState> { }
export = FormCheckboxInput;
