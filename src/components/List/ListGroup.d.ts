import * as React from 'react';

declare namespace ListGroup {
    export interface IListGroupProps<T> extends React.HTMLProps<T> {
      className?: string;
      transparent?: boolean;
    }
    export type ListGroupProps = IListGroupProps<HTMLDivElement>;
}
declare class ListGroup extends React.Component<ListGroup.ListGroupProps> { }
export = ListGroup;
