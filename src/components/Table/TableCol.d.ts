import * as React from 'react';

declare namespace TableCol {
    interface ITableColProps<T> extends React.HTMLProps<T> {
    }
    type Props = ITableColProps<HTMLTableCellElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const TableCol: TableCol.Component;
export = TableCol;
