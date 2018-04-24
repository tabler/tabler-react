import * as React from 'react';

declare namespace TableRow {
    export interface ITableRowProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type TableRowProps = ITableRowProps<HTMLDivElement>;
}
declare class TableRow extends React.Component<TableRow.TableRowProps> { }
export = TableRow;
