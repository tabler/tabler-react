import * as React from 'react';

declare namespace H5 {
    export interface H5Props extends React.Props<H5> {
      className?: string;
    }
}
declare class H5 extends React.Component<H5.H5Props> { }
export = H5;
