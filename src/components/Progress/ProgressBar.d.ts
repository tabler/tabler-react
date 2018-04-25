import * as React from 'react';

declare namespace ProgressBar {
    interface IProgressBarProps<T> extends React.HTMLProps<T> {

      color?: string;
      width?: number;
    }
    type Props = IProgressBarProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const ProgressBar: ProgressBar.Component;
export = ProgressBar;
