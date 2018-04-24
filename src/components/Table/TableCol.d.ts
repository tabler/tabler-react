import * as React from 'react';

declare namespace TableCol {
    export interface TableColProps extends React.Props<TableCol> {
      className?: string;
    }
}
declare class TableCol extends React.Component<TableCol.TableColProps> { }
export = TableCol;
