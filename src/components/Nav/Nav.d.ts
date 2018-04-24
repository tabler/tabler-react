import * as React from 'react';

declare namespace Nav {
    export interface INavProps<T> extends React.HTMLProps<T> {
      className?: string;
      tabbed?: boolean;
    }
    export type NavProps = INavProps<HTMLDivElement>;
}
declare class Nav extends React.Component<Nav.NavProps> { }
export = Nav;
