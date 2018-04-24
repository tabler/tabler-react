import * as React from 'react';

declare namespace Table {
    export interface TableProps extends React.Props<Table> {
      className?: string;
      cards?: boolean;
      striped?: boolean;
      responsive?: boolean;
    }
}
declare class Table extends React.Component<Table.TableProps> { }
export = Table;
