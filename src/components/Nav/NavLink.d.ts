import * as React from 'react';

declare namespace NavLink {
    interface INavLinkProps<T> extends React.HTMLProps<T> {
      value?: string;
      RootComponent?: React.ReactType;
      active?: boolean;
      icon?: string;
      to?: string;
      hasSubNav?: boolean;
    }
    type Props = INavLinkProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const NavLink: NavLink.Component;
export = NavLink;
