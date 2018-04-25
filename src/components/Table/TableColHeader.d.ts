import * as React from 'react';

declare namespace TableColHeader {
    interface ITableColHeaderProps<T> extends React.HTMLProps<T> {
      colSpan?: number;
    }
    type Props = ITableColHeaderProps<HTMLTableHeaderCellElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const TableColHeader: TableColHeader.Component;
export = TableColHeader;
