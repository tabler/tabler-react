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
}: Props): React.Node {
  const childrenForAll = (
    <React.Fragment>
      <Nav.Link
        className={className}
        to={to}
        icon={icon}
        RootComponent={LinkComponent}
        hasSubNav={hasSubNav}
      >
        {value}
      </Nav.Link>
      {hasSubNav ? <Dropdown.Menu arrow>{children}</Dropdown.Menu> : children}
    </React.Fragment>
  );

  return type === "div" ? (
    <div className="nav-item">{childrenForAll}</div>
  ) : (
    <li className="nav-item">{childrenForAll}</li>
  );
}

NavItem.displayName = "Nav.Item";

export default NavItem;
