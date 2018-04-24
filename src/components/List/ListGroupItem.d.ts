import * as React from 'react';

declare namespace ListGroupItem {
    export interface IListGroupItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string;
    }
    export type ListGroupItemProps = IListGroupItemProps<HTMLDivElement>;
}
declare class ListGroupItem extends React.Component<ListGroupItem.ListGroupItemProps> { }
export = ListGroupItem;
