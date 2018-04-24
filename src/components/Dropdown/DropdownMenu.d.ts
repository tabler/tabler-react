import * as React from 'react';

declare namespace DropdownMenu {
    export interface DropdownMenuProps extends React.Props<DropdownMenu> {
      className?: string;
      position?: string;
      arrow?: boolean;
    }
}
declare class DropdownMenu extends React.Component<DropdownMenu.DropdownMenuProps> { }
export = DropdownMenu;
