import * as React from 'react';

declare namespace TableRow {
    export interface TableRowProps extends React.Props<TableRow> {
      className?: string;
    }
}
declare class TableRow extends React.Component<TableRow.TableRowProps> { }
export = TableRow;
