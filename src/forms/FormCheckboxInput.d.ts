import * as React from 'react';

declare namespace FormCheckboxInput {
    interface IFormCheckboxInputProps<T> extends React.HTMLProps<T> {
      label: string;
    }
    type Props = IFormCheckboxInputProps<HTMLElement>; // TODO: not sure if `Form.Group`
    interface IFormCheckboxInputState {
      value: boolean;
    }
    type State = IFormCheckboxInputState;
    type Component = React.Component<Props, State>;
}
declare const FormCheckboxInput: FormCheckboxInput.Component; // TODO: Should this be a class?
export = FormCheckboxInput;
