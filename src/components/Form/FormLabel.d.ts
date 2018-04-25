import * as React from 'react';

declare namespace FormLabel {
    interface IFormLabelProps<T> extends React.HTMLProps<T> {
      aside?: string;
    }
    type Props = IFormLabelProps<HTMLLabelElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormLabel: FormLabel.Component;
export = FormLabel;
