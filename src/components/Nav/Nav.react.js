//@flow

import * as React from "react";
import cn from "classnames";
import NavItem from "./NavItem.react";
import NavLink from "./NavLink.react";
import NavSubmenu from "./NavSubmenu.react";
import NavSubmenuItem from "./NavSubmenuItem.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +tabbed?: boolean
|};

function Nav({ className, children, tabbed = true }: Props): React.Node {
  const classes = cn({ nav: true, "nav-tabs": tabbed }, className);
  return <ul className={classes}>{children}</ul>;
}

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Submenu = NavSubmenu;
Nav.SubmenuItem = NavSubmenuItem;

export default Nav;
