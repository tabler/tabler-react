import * as React from 'react';

import { Omit } from '../../index';

declare namespace FormTextArea {
    interface IFormTextAreaProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'defaultValue'> {
      placeholder?: string;
      name?: string;
      value?: string | number;
      defaultValue?: string | number;
      disabled?: boolean;
      rows?: number;
    }
    type Props = IFormTextAreaProps<HTMLTextAreaElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormTextArea: FormTextArea.Component;
export = FormTextArea;
