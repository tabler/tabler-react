import * as React from 'react';

declare namespace Header {
    export interface IHeaderProps<T> extends React.HTMLProps<T> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      size?: 1 | 2 | 3 | 4 | 5;
    }
    export type HeaderProps = IHeaderProps<HTMLDivElement>
}
declare class Header extends React.Component<Header.HeaderProps> { }
export = Header;
