import * as React from 'react';

declare namespace NavItem {
    interface INavItemProps<T> extends React.HTMLProps<T> {
      value?: string;
      LinkComponent?: React.ReactType;
      href?: string;
      to?: string; // this is so you can easily use with React router Link/NavItemLink
      icon?: string; // so you can pass an icon down to the RootComponent
      type?: "li" | "div";
      hasSubNavItem?: boolean;
    }
    type Props = INavItemProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const NavItem: NavItem.Component;
export = NavItem;
