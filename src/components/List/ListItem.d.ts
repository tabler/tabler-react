import * as React from 'react';

declare namespace ListItem {
    interface IListItemProps<T> extends React.HTMLProps<T> {
    }
    type Props = IListItemProps<HTMLLIElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const ListItem: ListItem.Component;
export = ListItem;
