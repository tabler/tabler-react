import * as React from 'react';

declare namespace NavSubmenuItem {
    export interface NavSubmenuItemProps extends React.Props<NavSubmenuItem> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string; // this is so you can easily use with React router Link/NavLink
    }
}
declare class NavSubmenuItem extends React.Component<NavSubmenuItem.NavSubmenuItemProps> { }
export = NavSubmenuItem;
