import * as React from 'react';

declare namespace NavSubItem {
    export interface NavSubItemProps extends React.Props<NavSubItem> {
      className?: string;
      LinkComponent?: React.ReactElement<any>;
      to?: string;
      icon?: string;
      value?: string;
    }
}
declare class NavSubItem extends React.Component<NavSubItem.NavSubItemProps> { }
export = NavSubItem;
