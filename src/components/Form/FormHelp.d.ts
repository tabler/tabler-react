import * as React from 'react';

declare namespace FormHelp {
    interface IFormHelpProps<T> extends React.HTMLProps<T> {
      position?: "top" | "bottom";
      message?: React.ReactNode;
    }
    type Props = IFormHelpProps<HTMLSpanElement>
    type Component = React.StatelessComponent<Props>;
}
declare const FormHelp: FormHelp.Component;
export = FormHelp;
