import * as React from 'react';

declare namespace ListGroupItem {
    interface IListGroupItemProps<T> extends React.HTMLProps<T> {
      RootComponent?: React.ReactType;
      active?: boolean;
      icon?: string;
      to?: string;
    }
    type Props = IListGroupItemProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const ListGroupItem: ListGroupItem.Component;
export = ListGroupItem;
