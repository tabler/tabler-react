import * as React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCol from './TableCol';
import TableColHeader from './TableColHeader';

declare namespace Table {
    interface ITableProps<T> extends React.HTMLProps<T> {
      cards?: boolean;
      striped?: boolean;
      responsive?: boolean;
    }
    type Props = ITableProps<HTMLElement>; // TODO: not sure if HTMLTableElement | HTMLDivElement
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {1
      Header: TableHeader.Component;
      HeaderProps: TableHeader.Props;
      Body: TableBody.Component;
      BodyProps: TableBody.Props;
      Row: TableRow.Component;
      RowProps: TableRow.Props;
      Col: TableCol.Component;
      ColProps: TableCol.Props;
      ColHeader: TableColHeader.Component;
      ColHeaderProps: TableColHeader.Props;
    }
}
declare const Table: Table.Component & Table.NestedComponents;
export = Table;
