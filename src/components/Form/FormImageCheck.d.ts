import * as React from 'react';

declare namespace FormImageCheck {
    export interface IFormImageCheckProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormImageCheckProps = IFormImageCheckProps<HTMLDivElement>;
}
declare class FormImageCheck extends React.Component<FormImageCheck.FormImageCheckProps> { }
export = FormImageCheck;
