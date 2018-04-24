import * as React from 'react';

declare namespace Table {
    export interface ITableProps<T> extends React.HTMLProps<T> {
      className?: string;
      cards?: boolean;
      striped?: boolean;
      responsive?: boolean;
    }
    export type TableProps = ITableProps<HTMLDivElement>;
}
declare class Table extends React.Component<Table.TableProps> { }
export = Table;
