import * as React from 'react';

declare namespace FormInputGroup {
    interface IFormInputGroupProps<T> extends React.HTMLProps<T> {
      append?: boolean;
      RootComponent?: React.ReactType;
    }
    type Props = IFormInputGroupProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormInputGroup: FormInputGroup.Component;
export = FormInputGroup;
