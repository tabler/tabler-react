import * as React from 'react';

declare namespace FormGroup {
    export interface FormGroupProps extends React.Props<FormGroup> {
      className?: string;
      label?: React.ReactNode,
    }
}
declare class FormGroup extends React.Component<FormGroup.FormGroupProps> { }
export = FormGroup;
