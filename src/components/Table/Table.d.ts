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
      Body: TableBody.Component;
      Row: TableRow.Component;
      Col: TableCol.Component;
      ColHeader: TableColHeader.Component;
    }
}
declare const Table: Table.Component & Table.NestedComponents;
export = Table;
