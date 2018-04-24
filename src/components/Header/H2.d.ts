import * as React from 'react';

declare namespace H2 {
    export interface IH2Props<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type H2Props = IH2Props<HTMLDivElement>
}
declare class H2 extends React.Component<H2.H2Props> { }
export = H2;
