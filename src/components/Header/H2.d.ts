import * as React from 'react';

declare namespace H2 {
    export interface H2Props extends React.Props<H2> {
      className?: string;
    }
}
declare class H2 extends React.Component<H2.H2Props> { }
export = H2;
