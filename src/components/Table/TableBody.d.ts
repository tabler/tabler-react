import * as React from 'react';

declare namespace TableBody {
    export interface TableBodyProps extends React.Props<TableBody> {
      className?: string;
    }
}
declare class TableBody extends React.Component<TableBody.TableBodyProps> { }
export = TableBody;
