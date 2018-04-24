import * as React from 'react';

declare namespace Dropdown {
    export interface IDropdownProps<T> extends React.HTMLProps<T> {
      className?: string;
      desktopOnly?: boolean;
    }
    export type DropdownProps = IDropdownProps<HTMLDivElement>;
}
declare class Dropdown extends React.Component<Dropdown.DropdownProps> { }
export = Dropdown;
