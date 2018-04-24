import * as React from 'react';

declare namespace TableColHeader {
    export interface TableColHeaderProps extends React.Props<TableColHeader> {
      className?: string;
      colSpan?: number;
    }
}
declare class TableColHeader extends React.Component<TableColHeader.TableColHeaderProps> { }
export = TableColHeader;
