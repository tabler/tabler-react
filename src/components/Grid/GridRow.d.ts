import * as React from 'react';

declare namespace GridRow {
    export interface IGridRowProps<T> extends React.HTMLProps<T> {
      className?: string;
      cards?: boolean;
      gutters?: "xs" | "sm" | "md" | "lg";
    }
    export type GridRowProps = IGridRowProps<HTMLDivElement>;
}
declare class GridRow extends React.Component<GridRow.GridRowProps> { }
export = GridRow;
