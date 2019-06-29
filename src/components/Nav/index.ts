import Nav from "./Nav";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavSubItem from "./NavSubItem";
import NavSubmenu from "./NavSubmenu";
import NavSubmenuItem from "./NavSubmenuItem";
import NavLinkTitle from "./NavLinkTitle";
import NavSubNav from "./NavSubNav";
import NavBar from "./NavBar";
import NavBarHeading from "./NavBarHeading";

const CompoundNav = Nav as typeof Nav & {
  Item: typeof NavItem;
  SubItem: typeof NavSubItem;
  Link: typeof NavLink;
  LinkTitle: typeof NavLinkTitle;
  Submenu: typeof NavSubmenu;
  SubmenuItem: typeof NavSubmenuItem;
  SubNav: typeof NavSubNav;
  Bar: typeof NavBar;
  BarHeading: typeof NavBarHeading;
};

(CompoundNav as React.FunctionComponent).displayName = "Nav";

CompoundNav.Item = NavItem;
CompoundNav.SubItem = NavSubItem;
CompoundNav.Link = NavLink;
CompoundNav.LinkTitle = NavLinkTitle;
CompoundNav.Submenu = NavSubmenu;
CompoundNav.SubmenuItem = NavSubmenuItem;
CompoundNav.SubNav = NavSubNav;
CompoundNav.Bar = NavBar;
CompoundNav.BarHeading = NavBarHeading;

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
  NavBarHeading,
};
