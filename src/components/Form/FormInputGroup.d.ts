import * as React from 'react';

declare namespace FormInputGroup {
    export interface IFormInputGroupProps<T> extends React.HTMLProps<T> {
      className?: string;
      append?: boolean;
      RootComponent?: React.ReactElement<any>;
    }
    export type FormInputGroupProps = IFormInputGroupProps<HTMLDivElement>;
}
declare class FormInputGroup extends React.Component<FormInputGroup.FormInputGroupProps> { }
export = FormInputGroup;
