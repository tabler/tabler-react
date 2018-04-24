import * as React from 'react';

declare namespace NavSubItem {
    export interface INavSubItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      LinkComponent?: React.ReactElement<any>;
      to?: string;
      icon?: string;
      value?: string;
    }
    export type NavSubItemProps = INavSubItemProps<HTMLDivElement>;
}
declare class NavSubItem extends React.Component<NavSubItem.NavSubItemProps> { }
export = NavSubItem;
