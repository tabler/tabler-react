import * as React from 'react';

declare namespace FormInputGroup {
    export interface FormInputGroupProps extends React.Props<FormInputGroup> {
      className?: string;
      append?: boolean;
      RootComponent?: React.ReactElement<any>;
    }
}
declare class FormInputGroup extends React.Component<FormInputGroup.FormInputGroupProps> { }
export = FormInputGroup;
