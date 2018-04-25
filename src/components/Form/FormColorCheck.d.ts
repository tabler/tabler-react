import * as React from 'react';

declare namespace FormColorCheck {
    interface IFormColorCheckProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormColorCheckProps<HTMLElement>; // TODO: not sure if `Grid.Row`
    type Component = React.StatelessComponent<Props>;
}
declare const FormColorCheck: FormColorCheck.Component;
export = FormColorCheck;
