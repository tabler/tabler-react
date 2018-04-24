import * as React from 'react';

import { Omit } from '../../index';

declare namespace FormTextArea {
    export interface IFormTextAreaProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'defaultValue'> {
      className?: string;
      placeholder?: string;
      name?: string;
      value?: string | number;
      defaultValue?: string | number;
      disabled?: boolean;
      rows?: number;
    }
    export type FormTextAreaProps = IFormTextAreaProps<HTMLDivElement>;
}
declare class FormTextArea extends React.Component<FormTextArea.FormTextAreaProps> { }
export = FormTextArea;
