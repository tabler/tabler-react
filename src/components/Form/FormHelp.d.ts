import * as React from 'react';

declare namespace FormHelp {
    export interface FormHelpProps extends React.Props<FormHelp> {
      className?: string;
      position?: "top" | "bottom";
      message?: React.ReactNode;
    }
}
declare class FormHelp extends React.Component<FormHelp.FormHelpProps> { }
export = FormHelp;
