import * as React from 'react';

declare namespace DropdownItem {
    interface IDropdownItemProps<T> extends React.HTMLProps<T> {
      icon?: string;
      value?: string;
      badge?: string;
      to?: string;
      RootComponent?: React.ReactType;
    }
    type Props = IDropdownItemProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const DropdownItem: DropdownItem.Component;
export = DropdownItem;
