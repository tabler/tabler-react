import * as React from 'react';

declare namespace DropdownItemDivider {
    export interface IDropdownItemDividerProps<T> extends React.HTMLProps<T> {
    }
    export type DropdownItemDividerProps = IDropdownItemDividerProps<HTMLDivElement>;
}
declare class DropdownItemDivider extends React.Component<DropdownItemDivider.DropdownItemDividerProps> { }
export = DropdownItemDivider;
