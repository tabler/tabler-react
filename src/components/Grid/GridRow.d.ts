import * as React from 'react';

declare namespace GridRow {
    export interface GridRowProps extends React.Props<GridRow> {
      className?: string;
      cards?: boolean;
      gutters?: "xs" | "sm" | "md" | "lg";
    }
}
declare class GridRow extends React.Component<GridRow.GridRowProps> { }
export = GridRow;
