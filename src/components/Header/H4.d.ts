import * as React from 'react';

declare namespace H4 {
    export interface IH4Props<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type H4Props = IH4Props<HTMLDivElement>
}
declare class H4 extends React.Component<H4.H4Props> { }
export = H4;
