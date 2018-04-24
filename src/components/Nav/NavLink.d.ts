import * as React from 'react';

declare namespace NavLink {
    export interface INavLinkProps<T> extends React.HTMLProps<T> {
      className?: string;
      value?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string;
      hasSubNav?: boolean;
    }
    export type NavLinkProps = INavLinkProps<HTMLDivElement>;
}
declare class NavLink extends React.Component<NavLink.NavLinkProps> { }
export = NavLink;
