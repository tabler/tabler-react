import * as React from 'react';

declare namespace Header {
    export interface HeaderProps extends React.Props<Header> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      size?: 1 | 2 | 3 | 4 | 5;
    }
}
declare class Header extends React.Component<Header.HeaderProps> { }
export = Header;
