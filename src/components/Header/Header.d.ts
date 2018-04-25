import * as React from 'react';

import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';

declare namespace Header {
    interface IHeaderProps<T> extends React.HTMLProps<T> {
      RootComponent?: React.ReactType;
      size?: 1 | 2 | 3 | 4 | 5;
    }
    type Props = IHeaderProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      H1: H1.Component;
      H2: H2.Component;
      H3: H3.Component;
      H4: H4.Component;
      H5: H5.Component;
    }
}
declare const Header: Header.Component & Header.NestedComponents;
export = Header;
