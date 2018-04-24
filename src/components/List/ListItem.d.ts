import * as React from 'react';

declare namespace ListItem {
    export interface IListItemProps<T> extends React.HTMLProps<ListItem> {
      className?: string;
    }
    export type ListItemProps = IListItemProps<HTMLDivElement>;
}
declare class ListItem extends React.Component<ListItem.ListItemProps> { }
export = ListItem;
