// @flow

import Nav from "./Nav";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavSubItem from "./NavSubItem";
import NavSubmenu from "./NavSubmenu";
import NavSubmenuItem from "./NavSubmenuItem";

const CompoundNav = Nav as typeof Nav & {
  Item: typeof NavItem;
  SubItem: typeof NavSubItem;
  Link: typeof NavLink;
  Submenu: typeof NavSubmenu;
  SubmenuItem: typeof NavSubmenuItem;
};

CompoundNav.Item = NavItem;
CompoundNav.SubItem = NavSubItem;
CompoundNav.Link = NavLink;
CompoundNav.Submenu = NavSubmenu;
CompoundNav.SubmenuItem = NavSubmenuItem;

export {
  CompoundNav as default,
  Nav,
  NavSubItem,
  NavLink,
  NavSubmenu,
  NavSubmenuItem,
};
