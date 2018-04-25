import * as React from 'react';

import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownItemDivider from './DropdownItemDivider';

declare namespace Dropdown {
    interface IDropdownProps<T> extends React.HTMLProps<T> {
      desktopOnly?: boolean;
    }
    type Props = IDropdownProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Trigger: DropdownTrigger.Component;
      Menu: DropdownMenu.Component;
      Item: DropdownItem.Component;
      ItemDivider: DropdownItemDivider.Component;
    }
}
declare const Dropdown: Dropdown.Component & Dropdown.NestedComponents;
export = Dropdown;
