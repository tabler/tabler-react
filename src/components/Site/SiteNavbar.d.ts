import * as React from 'react';

declare namespace SideNavbar {
    export interface ISideNavbarProps<T> extends React.HTMLProps<T> {
    }
    export type SideNavbarProps = ISideNavbarProps<HTMLDivElement>;
}
declare class SideNavbar extends React.Component<SideNavbar.SideNavbarProps> { }
export = SideNavbar;
