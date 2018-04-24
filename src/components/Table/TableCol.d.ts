import * as React from 'react';

declare namespace TableCol {
    export interface ITableColProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type TableColProps = ITableColProps<HTMLDivElement>;
}
declare class TableCol extends React.Component<TableCol.TableColProps> { }
export = TableCol;
