import * as React from 'react';

declare namespace NavLink {
    export interface NavLinkProps extends React.Props<NavLink> {
      className?: string;
      value?: string;
      RootComponent?: React.ReactElement<any>;
      active?: boolean;
      icon?: string;
      to?: string;
      hasSubNav?: boolean;
    }
}
declare class NavLink extends React.Component<NavLink.NavLinkProps> { }
export = NavLink;
