import * as React from 'react';

declare namespace FormLabel {
    export interface IFormLabelProps<T> extends React.HTMLProps<T> {
      className?: string;
      aside?: string;
    }
    export type FormLabelProps = IFormLabelProps<HTMLDivElement>;
}
declare class FormLabel extends React.Component<FormLabel.FormLabelProps> { }
export = FormLabel;
