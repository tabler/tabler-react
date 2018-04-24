import * as React from 'react';

declare namespace DropdownMenu {
    export interface IDropdownMenuProps<T> extends React.HTMLProps<T> {
      className?: string;
      position?: string;
      arrow?: boolean;
    }
    export type DropdownMenuProps = IDropdownMenuProps<HTMLDivElement>;
}
declare class DropdownMenu extends React.Component<DropdownMenu.DropdownMenuProps> { }
export = DropdownMenu;
