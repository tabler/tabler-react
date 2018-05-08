// @flow
import * as React from "react";
import Nav from "../Nav";
import Dropdown from "../Dropdown";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
  +LinkComponent?: React.ElementType,
  +href?: string,
  +to?: string,
  +icon?: string,
  +type?: "li" | "div",
  +hasSubNav?: boolean,
  +active?: boolean,
|};

function NavItem({
  children,
  LinkComponent,
  value,
  className,
  to,
  type = "li",
  icon,
  hasSubNav,
  active,
}: Props): React.Node {
  const navLink = (typeof children === "string" || value) && (
    <Nav.Link
      className={className}
      to={to}
      icon={icon}
      RootComponent={LinkComponent}
      hasSubNav={hasSubNav}
      active={active}
    >
      {!hasSubNav && typeof children === "string" ? children : value}
    </Nav.Link>
  );

  const childrenForAll = (
    <React.Fragment>
      {navLink}
      {typeof children !== "string" && !hasSubNav && children}
      {hasSubNav && <Dropdown.Menu arrow>{children}</Dropdown.Menu>}
    </React.Fragment>
  );

  return type === "div" ? (
    <div className="nav-item">{childrenForAll}</div>
  ) : (
    <li className="nav-item">{childrenForAll}</li>
  );
}

NavItem.displayName = "Nav.Item";

/** @component */
export default NavItem;
