import * as React from 'react';

declare namespace FormColorCheck {
    export interface IFormColorCheckProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormColorCheckProps = IFormColorCheckProps<HTMLDivElement>;
}
declare class FormColorCheck extends React.Component<FormColorCheck.FormColorCheckProps> { }
export = FormColorCheck;
