import * as React from 'react';

declare namespace ListItem {
    export interface ListItemProps extends React.Props<ListItem> {
      className?: string;
    }
}
declare class ListItem extends React.Component<ListItem.ListItemProps> { }
export = ListItem;
