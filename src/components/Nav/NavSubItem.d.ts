import * as React from 'react';

declare namespace NavSubItem {
    interface INavSubItemProps<T> extends React.HTMLProps<T> {
      LinkComponent?: React.ReactType;
      to?: string;
      icon?: string;
      value?: string;
    }
    type Props = INavSubItemProps<HTMLDivElement>; // TODO: not sure if `Dropdown.Item`
    type Component = React.StatelessComponent<Props>;
}
declare const NavSubItem: NavSubItem.Component;
export = NavSubItem;
