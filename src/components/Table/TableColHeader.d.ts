import * as React from 'react';

declare namespace TableColHeader {
    export interface ITableColHeaderProps<T> extends React.HTMLProps<T> {
      className?: string;
      colSpan?: number;
    }
    export type TableColHeaderProps = ITableColHeaderProps<HTMLDivElement>;
}
declare class TableColHeader extends React.Component<TableColHeader.TableColHeaderProps> { }
export = TableColHeader;
