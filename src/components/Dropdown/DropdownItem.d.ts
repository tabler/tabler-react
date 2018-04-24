import * as React from 'react';

declare namespace DropdownItem {
    export interface IDropdownItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      icon?: string;
      value?: string;
      badge?: string;
      to?: string;
      RootComponent?: React.ReactElement<any>;
    }
    export type DropdownItemProps = IDropdownItemProps<HTMLDivElement>;
}
declare class DropdownItem extends React.Component<DropdownItem.DropdownItemProps> { }
export = DropdownItem;
