import * as React from 'react';

declare namespace ListGroupItem {
    export interface ListGroupItemProps extends React.Props<ListGroupItem> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string;
    }
}
declare class ListGroupItem extends React.Component<ListGroupItem.ListGroupItemProps> { }
export = ListGroupItem;
