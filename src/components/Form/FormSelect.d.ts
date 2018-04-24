import * as React from 'react';

declare namespace FormSelect {
    export interface IFormSelectProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormSelectProps = IFormSelectProps<HTMLDivElement>;
}
declare class FormSelect extends React.Component<FormSelect.FormSelectProps> { }
export = FormSelect;
