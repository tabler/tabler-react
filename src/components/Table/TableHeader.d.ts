import * as React from 'react';

declare namespace TableHeader {
    export interface ITableHeaderProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type TableHeaderProps = ITableHeaderProps<HTMLDivElement>;
}
declare class TableHeader extends React.Component<TableHeader.TableHeaderProps> { }
export = TableHeader;
