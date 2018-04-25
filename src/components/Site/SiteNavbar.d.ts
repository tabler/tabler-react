import * as React from 'react';

declare namespace SideNavbar {
    interface ISideNavbarProps<T> extends React.HTMLProps<T> {
    }
    type Props = ISideNavbarProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const SideNavbar: SideNavbar.Component;
export = SideNavbar;
