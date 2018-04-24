import * as React from 'react';

declare namespace ProgressBar {
    export interface IProgressBarProps<T> extends React.HTMLProps<T> {
      className?: string;
      color?: string;
      width?: number;
    }
    export type ProgressBarProps = IProgressBarProps<HTMLDivElement>;
}
declare class ProgressBar extends React.Component<ProgressBar.ProgressBarProps> { }
export = ProgressBar;
