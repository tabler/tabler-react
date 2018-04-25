import * as React from 'react';

import ListItem from './ListItem';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

declare namespace List {
    interface IListProps<T> extends React.HTMLProps<T> {
      unstyled?: boolean;
    }
    type Props = IListProps<HTMLUListElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Item: ListItem.Component;
      ItemProps: ListItem.Props;
      Group: ListGroup.Component;
      GroupProps: ListGroup.Props;
      GroupItem: ListGroupItem.Component;
      GroupItemProps: ListGroupItem.Props;
    }
}
declare const List: List.Component & List.NestedComponents;
export = List;
