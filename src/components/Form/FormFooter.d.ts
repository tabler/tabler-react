import * as React from 'react';

declare namespace FormFooter {
    export interface IFormFooterProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormFooterProps = IFormFooterProps<HTMLDivElement>;
}
declare class FormFooter extends React.Component<FormFooter.FormFooterProps> { }
export = FormFooter;
