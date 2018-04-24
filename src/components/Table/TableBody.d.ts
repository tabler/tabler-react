import * as React from 'react';

declare namespace TableBody {
    export interface ITableBodyProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type TableBodyProps = ITableBodyProps<HTMLDivElement>;
}
declare class TableBody extends React.Component<TableBody.TableBodyProps> { }
export = TableBody;
