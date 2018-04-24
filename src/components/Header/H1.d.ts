import * as React from 'react';

declare namespace H1 {
    export interface IH1Props<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type H1Props = IH1Props<HTMLDivElement>;
}
declare class H1 extends React.Component<H1.H1Props> { }
export = H1;
