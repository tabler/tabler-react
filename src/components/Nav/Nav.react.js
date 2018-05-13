//@flow

import * as React from "react";
import cn from "classnames";
import NavItem from "./NavItem.react";
import NavLink from "./NavLink.react";
import NavSubItem from "./NavSubItem.react";
import NavSubmenu from "./NavSubmenu.react";
import NavSubmenuItem from "./NavSubmenuItem.react";

export type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

type Props = {|
  +children?: React.Node,
  +className?: string,
  +tabbed?: boolean,
  +items?: React.ChildrenArray<React.Element<typeof Nav.Item>>,
  +itemsObjects?: Array<navItem>,
|};

function Nav({
  className,
  children,
  tabbed = true,
  items,
  itemsObjects,
}: Props): React.Node {
  const classes = cn({ nav: true, "nav-tabs": tabbed }, className);
  return (
    <ul className={classes}>
      {items ||
        (itemsObjects &&
          itemsObjects.map((a, i) => (
            <Nav.Item
              key={i}
              icon={a.icon}
              value={a.value}
              to={a.to}
              hasSubNav={!!a.subItems}
              LinkComponent={a.LinkComponent}
              subItemsObjects={a.subItems}
              active={a.active}
            />
          ))) ||
        children}
    </ul>
  );
}

Nav.Item = NavItem;
Nav.SubItem = NavSubItem;
Nav.Link = NavLink;
Nav.Submenu = NavSubmenu;
Nav.SubmenuItem = NavSubmenuItem;

export default Nav;
