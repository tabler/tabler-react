import * as React from 'react';

declare namespace NavSubmenu {
    export interface INavSubmenuProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type NavSubmenuProps = INavSubmenuProps<HTMLDivElement>;
}
declare class NavSubmenu extends React.Component<NavSubmenu.NavSubmenuProps> { }
export = NavSubmenu;
