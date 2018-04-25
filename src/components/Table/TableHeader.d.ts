import * as React from 'react';

declare namespace TableHeader {
    interface ITableHeaderProps<T> extends React.HTMLProps<T> {
    }
    type Props = ITableHeaderProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const TableHeader: TableHeader.Component;
export = TableHeader;
