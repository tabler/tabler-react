import * as React from 'react';

declare namespace H3 {
    export interface IH3Props<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type H3Props = IH3Props<HTMLDivElement>
}
declare class H3 extends React.Component<H3.H3Props> { }
export = H3;
