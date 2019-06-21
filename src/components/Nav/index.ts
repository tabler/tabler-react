// @flow

import Nav, { NavProps } from "./Nav";

import NavItem, { NavItemProps } from "./NavItem";
import NavLink, { NavLinkProps } from "./NavLink";
import NavSubItem, { NavSubItemProps } from "./NavSubItem";
import NavSubmenu, { NavSubmenuProps } from "./NavSubmenu";
import NavSubmenuItem, { NavSubmenuItemProps } from "./NavSubmenuItem";
import NavLinkTitle, { NavLinkTitleProps } from "./NavLinkTitle";
import { ReactElement, ReactType, ElementType } from "react";

const CompoundNav = Nav as typeof Nav & {
  Item: typeof NavItem;
  SubItem: typeof NavSubItem;
  Link: typeof NavLink;
  LinkTitle: typeof NavLinkTitle;
  Submenu: typeof NavSubmenu;
  SubmenuItem: typeof NavSubmenuItem;
};

(CompoundNav as React.FunctionComponent).displayName = "Nav";

CompoundNav.Item = NavItem;
CompoundNav.SubItem = NavSubItem;
CompoundNav.Link = NavLink;
CompoundNav.LinkTitle = NavLinkTitle;
CompoundNav.Submenu = NavSubmenu;
CompoundNav.SubmenuItem = NavSubmenuItem;

export * from "./NavItem";
export {
  CompoundNav as default,
  CompoundNav as Nav,
  NavSubItem,
  NavLink,
  NavLinkTitle,
  NavSubmenu,
  NavSubmenuItem,
};
