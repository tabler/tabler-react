import * as React from 'react';

declare namespace FormFooter {
    interface IFormFooterProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormFooterProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormFooter: FormFooter.Component;
export = FormFooter;
