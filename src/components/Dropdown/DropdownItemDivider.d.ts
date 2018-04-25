import * as React from 'react';

declare namespace DropdownItemDivider {
    interface IDropdownItemDividerProps<T> extends React.HTMLProps<T> {
    }
    type Props = IDropdownItemDividerProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const DropdownItemDivider: DropdownItemDivider.Component;
export = DropdownItemDivider;
