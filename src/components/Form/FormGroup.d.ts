import * as React from 'react';

import { Omit } from '../../index';

declare namespace FormGroup {
    export interface IFormGroupProps<T> extends Omit<React.HTMLProps<T>, 'label'> {
      className?: string;
      label?: React.ReactNode,
    }
    export type FormGroupProps = IFormGroupProps<HTMLDivElement>;
}
declare class FormGroup extends React.Component<FormGroup.FormGroupProps> { }
export = FormGroup;
