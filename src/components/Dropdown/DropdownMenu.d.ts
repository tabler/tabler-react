import * as React from 'react';

declare namespace DropdownMenu {
    interface IDropdownMenuProps<T> extends React.HTMLProps<T> {

      position?: string;
      arrow?: boolean;
    }
    type Props = IDropdownMenuProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const DropdownMenu: DropdownMenu.Component;
export = DropdownMenu;
