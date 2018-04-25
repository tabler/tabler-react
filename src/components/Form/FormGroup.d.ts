import * as React from 'react';

import { Omit } from '../../index';

declare namespace FormGroup {
    interface IFormGroupProps<T> extends Omit<React.HTMLProps<T>, 'label'> {
      label?: React.ReactNode,
    }
    type Props = IFormGroupProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormGroup: FormGroup.Component;
export = FormGroup;
