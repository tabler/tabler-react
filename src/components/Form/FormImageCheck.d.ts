import * as React from 'react';

declare namespace FormImageCheck {
    interface IFormImageCheckProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormImageCheckProps<HTMLElement>; // TODO: not sure if `Grid.Row`
    type Component = React.StatelessComponent<Props>;
}
declare const FormImageCheck: FormImageCheck.Component;
export = FormImageCheck;
