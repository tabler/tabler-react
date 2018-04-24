import * as React from 'react';

declare namespace List {
    export interface ListProps extends React.Props<List> {
      className?: string;
      unstyled?: boolean;
    }
}
declare class List extends React.Component<List.ListProps> { }
export = List;
