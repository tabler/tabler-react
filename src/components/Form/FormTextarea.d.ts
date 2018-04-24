import * as React from 'react';

declare namespace FormTextArea {
    export interface FormTextAreaProps extends React.Props<FormTextArea> {
      className?: string;
      placeholder?: string;
      name?: string;
      value?: string | number;
      defaultValue?: string | number;
      disabled?: boolean;
      rows?: number;
    }
}
declare class FormTextArea extends React.Component<FormTextArea.FormTextAreaProps> { }
export = FormTextArea;
