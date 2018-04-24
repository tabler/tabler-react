import * as React from 'react';

declare namespace Nav {
    export interface NavProps extends React.Props<Nav> {
      className?: string;
      tabbed?: boolean;
    }
}
declare class Nav extends React.Component<Nav.NavProps> { }
export = Nav;
