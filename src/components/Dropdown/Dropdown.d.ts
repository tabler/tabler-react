import * as React from 'react';

declare namespace Dropdown {
    export interface DropdownProps extends React.Props<Dropdown> {
      className?: string;
      desktopOnly?: boolean;
    }
}
declare class Dropdown extends React.Component<Dropdown.DropdownProps> { }
export = Dropdown;
