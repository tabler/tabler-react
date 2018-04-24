import * as React from 'react';

declare namespace List {
    export interface IListProps<T> extends React.HTMLProps<T> {
      className?: string;
      unstyled?: boolean;
    }
    export type ListProps = IListProps<HTMLDivElement>;
}
declare class List extends React.Component<List.ListProps> { }
export = List;
