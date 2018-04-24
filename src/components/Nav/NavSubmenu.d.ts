import * as React from 'react';

declare namespace NavSubmenu {
    export interface NavSubmenuProps extends React.Props<NavSubmenu> {
      className?: string;
    }
}
declare class NavSubmenu extends React.Component<NavSubmenu.NavSubmenuProps> { }
export = NavSubmenu;
