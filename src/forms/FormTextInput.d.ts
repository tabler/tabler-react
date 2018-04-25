import * as React from 'react';

declare namespace FormTextInput {
    interface IFormTextInputProps<T> extends React.HTMLProps<T> {
      type?: "checkbox" | "text" | "email" | "password";
      label: string;
      placeHolder: string;
    }
    type Props = IFormTextInputProps<HTMLElement>; // TODO: not sure if `Form.Group`
    interface IFormTextInputState {
      value: string | number;
    }
    type State = IFormTextInputState;
    type Component = React.Component<Props, State>;
}
declare const FormTextInput: FormTextInput.Component; // TODO: Should this be a class?
export = FormTextInput;
