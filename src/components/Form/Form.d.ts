import * as React from 'react';

declare namespace Form {
    export interface IFormProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormProps = IFormProps<HTMLDivElement>;
}
declare class Form extends React.Component<Form.FormProps> { }
export = Form;
