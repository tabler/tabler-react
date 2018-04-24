import * as React from 'react';

declare namespace TableHeader {
    export interface TableHeaderProps extends React.Props<TableHeader> {
      className?: string;
    }
}
declare class TableHeader extends React.Component<TableHeader.TableHeaderProps> { }
export = TableHeader;
