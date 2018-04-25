import * as React from 'react';

declare namespace TableBody {
    interface ITableBodyProps<T> extends React.HTMLProps<T> {
    }
    type Props = ITableBodyProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const TableBody: TableBody.Component;
export = TableBody;
