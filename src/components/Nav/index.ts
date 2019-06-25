import Nav from "./Nav";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavSubItem from "./NavSubItem";
import NavSubmenu from "./NavSubmenu";
import NavSubmenuItem from "./NavSubmenuItem";
import NavLinkTitle from "./NavLinkTitle";
import NavSubNav from "./NavSubNav";

const CompoundNav = Nav as typeof Nav & {
  Item: typeof NavItem;
  SubItem: typeof NavSubItem;
  Link: typeof NavLink;
  LinkTitle: typeof NavLinkTitle;
  Submenu: typeof NavSubmenu;
  SubmenuItem: typeof NavSubmenuItem;
  SubNav: typeof NavSubNav;
};

(CompoundNav as React.FunctionComponent).displayName = "Nav";

CompoundNav.Item = NavItem;
CompoundNav.SubItem = NavSubItem;
CompoundNav.Link = NavLink;
CompoundNav.LinkTitle = NavLinkTitle;
CompoundNav.Submenu = NavSubmenu;
CompoundNav.SubmenuItem = NavSubmenuItem;
CompoundNav.SubNav = NavSubNav;

// export * from "./NavItem";
export {
  CompoundNav as default,
  CompoundNav as Nav,
  NavItem,
  NavSubItem,
  NavLink,
  NavLinkTitle,
  NavSubmenu,
  NavSubmenuItem,
  NavSubNav,
};
