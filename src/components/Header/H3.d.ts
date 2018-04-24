import * as React from 'react';

declare namespace H3 {
    export interface H3Props extends React.Props<H3> {
      className?: string;
    }
}
declare class H3 extends React.Component<H3.H3Props> { }
export = H3;
