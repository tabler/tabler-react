import * as React from 'react';

declare namespace NavSubmenuItem {
    interface INavSubmenuItemProps<T> extends React.HTMLProps<T> {
      RootComponent?: React.ReactType;
      active?: boolean;
      icon?: string;
      to?: string; // this is so you can easily use with React router Link/NavLink
    }
    type Props = INavSubmenuItemProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const NavSubmenuItem: NavSubmenuItem.Component;
export = NavSubmenuItem;
