import * as React from 'react';

declare namespace Progress {
    export interface ProgressProps extends React.Props<Progress> {
      className?: string;
      active?: boolean;
      size?: string;
    }
}
declare class Progress extends React.Component<Progress.ProgressProps> { }
export = Progress;
