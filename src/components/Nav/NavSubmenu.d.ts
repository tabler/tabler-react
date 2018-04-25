import * as React from 'react';

declare namespace NavSubmenu {
    interface INavSubmenuProps<T> extends React.HTMLProps<T> {
    }
    type Props = INavSubmenuProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const NavSubmenu: NavSubmenu.Component;
export = NavSubmenu;
