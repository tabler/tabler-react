import * as React from 'react';

declare namespace H1 {
    export interface H1Props extends React.Props<H1> {
      className?: string;
    }
}
declare class H1 extends React.Component<H1.H1Props> { }
export = H1;
