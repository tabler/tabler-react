import * as React from 'react';

declare namespace NavItem {
    export interface INavItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      value?: string;
      LinkComponent?: React.ReactElement<any>;
      href?: string;
      to?: string; // this is so you can easily use with React router Link/NavItemLink
      icon?: string; // so you can pass an icon down to the RootComponent
      type?: "li" | "div";
      hasSubNavItem?: boolean;
    }
    export type NavItemProps = INavItemProps<HTMLDivElement>;
}
declare class NavItem extends React.Component<NavItem.NavItemProps> { }
export = NavItem;
