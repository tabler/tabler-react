import * as React from 'react';

declare namespace Form {
    export interface FormProps extends React.Props<Form> {
      className?: string;
    }
}
declare class Form extends React.Component<Form.FormProps> { }
export = Form;
