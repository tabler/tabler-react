// @flow

import Nav from "./Nav";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavSubItem from "./NavSubItem";
import NavSubmenu from "./NavSubmenu";
import NavSubmenuItem from "./NavSubmenuItem";

// @ts-ignore
Nav.Item = NavItem;
// @ts-ignore
Nav.SubItem = NavSubItem;
// @ts-ignore
Nav.Link = NavLink;
// @ts-ignore
Nav.Submenu = NavSubmenu;
// @ts-ignore
Nav.SubmenuItem = NavSubmenuItem;

export { Nav as default };
