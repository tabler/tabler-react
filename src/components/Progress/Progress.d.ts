import * as React from 'react';
import { Omit } from '../../index';

declare namespace Progress {
    export interface IProgressProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
      className?: string;
      active?: boolean;
      size?: string;
    }
    export type ProgressProps = IProgressProps<HTMLDivElement>;
}
declare class Progress extends React.Component<Progress.ProgressProps> { }
export = Progress;
