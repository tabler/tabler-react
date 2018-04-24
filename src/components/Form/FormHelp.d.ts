import * as React from 'react';

declare namespace FormHelp {
    export interface IFormHelpProps<T> extends React.HTMLProps<T> {
      className?: string;
      position?: "top" | "bottom";
      message?: React.ReactNode;
    }
    export type FormHelpProps = IFormHelpProps<HTMLDivElement>
}
declare class FormHelp extends React.Component<FormHelp.FormHelpProps> { }
export = FormHelp;
