import * as React from 'react';

declare namespace GridRow {
    interface IGridRowProps<T> extends React.HTMLProps<T> {

      cards?: boolean;
      gutters?: "xs" | "sm" | "md" | "lg";
    }
    type Props = IGridRowProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const GridRow: GridRow.Component;
export = GridRow;
