import * as React from 'react';

import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import NavLink from './NavLink';
import NavSubmenu from './NavSubmenu';
import NavSubmenuItem from './NavSubmenuItem';

declare namespace Nav {
    interface INavProps<T> extends React.HTMLProps<T> {
      tabbed?: boolean;
    }
    type Props = INavProps<HTMLUListElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Item: NavItem.Component;
      SubItem: NavSubItem.Component;
      Link: NavLink.Component;
      Submenu: NavSubmenu.Component;
      SubmenuItem: NavSubmenuItem.Component;
    }
}
declare const Nav: Nav.Component & Nav.NestedComponents;
export = Nav;
