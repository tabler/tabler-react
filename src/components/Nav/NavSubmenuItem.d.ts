import * as React from 'react';

declare namespace NavSubmenuItem {
    export interface INavSubmenuItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string; // this is so you can easily use with React router Link/NavLink
    }
    export type NavSubmenuItemProps = INavSubmenuItemProps<HTMLDivElement>;
}
declare class NavSubmenuItem extends React.Component<NavSubmenuItem.NavSubmenuItemProps> { }
export = NavSubmenuItem;
