// @flow

import Nav from "./Nav";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavSubItem from "./NavSubItem";
import NavSubmenu from "./NavSubmenu";
import NavSubmenuItem from "./NavSubmenuItem";

const CompoundNav = Object.assign(Nav, {
  Item: NavItem,
  SubItem: NavSubItem,
  Link: NavLink,
  Submenu: NavSubmenu,
  SubmenuItem: NavSubmenuItem,
});

export {
  CompoundNav as default,
  Nav,
  NavSubItem,
  NavLink,
  NavSubmenu,
  NavSubmenuItem,
};
