import * as React from 'react';

declare namespace ProgressBar {
    export interface ProgressBarProps extends React.Props<ProgressBar> {
      className?: string;
      color?: string;
      width?: number;
    }
}
declare class ProgressBar extends React.Component<ProgressBar.ProgressBarProps> { }
export = ProgressBar;
