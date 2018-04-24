import * as React from 'react';

declare namespace DropdownItem {
    export interface DropdownItemProps extends React.Props<DropdownItem> {
      className?: string;
      icon?: string;
      value?: string;
      badge?: string;
      to?: string;
      RootComponent?: React.ReactElement<any>;
    }
}
declare class DropdownItem extends React.Component<DropdownItem.DropdownItemProps> { }
export = DropdownItem;
