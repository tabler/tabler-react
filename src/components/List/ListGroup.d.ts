import * as React from 'react';

declare namespace ListGroup {
    interface IListGroupProps<T> extends React.HTMLProps<T> {
      transparent?: boolean;
    }
    type Props = IListGroupProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const ListGroup: ListGroup.Component;
export = ListGroup;
