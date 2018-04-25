import * as React from 'react';
import { Omit } from '../../index';

import ProgressBar from './ProgressBar';

declare namespace Progress {
    interface IProgressProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
      active?: boolean;
      size?: string;
    }
    type Props = IProgressProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Bar: ProgressBar.Component;
      BarProps: ProgressBar.Props;
    }
}
declare const Progress: Progress.Component & Progress.NestedComponents;
export = Progress;
