import * as React from 'react';

declare namespace H5 {
    export interface IH5Props<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type H5Props = IH5Props<HTMLDivElement>
}
declare class H5 extends React.Component<H5.H5Props> { }
export = H5;
