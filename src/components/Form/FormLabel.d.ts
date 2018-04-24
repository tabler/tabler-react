import * as React from 'react';

declare namespace FormLabel {
    export interface FormLabelProps extends React.Props<FormLabel> {
      className?: string;
      aside?: string;
    }
}
declare class FormLabel extends React.Component<FormLabel.FormLabelProps> { }
export = FormLabel;
