import * as React from 'react';

declare namespace ListGroup {
    export interface ListGroupProps extends React.Props<ListGroup> {
      className?: string;
      transparent?: boolean;
    }
}
declare class ListGroup extends React.Component<ListGroup.ListGroupProps> { }
export = ListGroup;
