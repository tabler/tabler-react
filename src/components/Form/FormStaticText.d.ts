import * as React from 'react';

declare namespace FormStaticText {
    interface IFormStaticTextProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormStaticTextProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormStaticText: FormStaticText.Component;
export = FormStaticText;
