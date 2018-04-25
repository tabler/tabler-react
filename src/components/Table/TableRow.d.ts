import * as React from 'react';

declare namespace TableRow {
    interface ITableRowProps<T> extends React.HTMLProps<T> {
    }
    type Props = ITableRowProps<HTMLTableRowElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const TableRow: TableRow.Component;
export = TableRow;
