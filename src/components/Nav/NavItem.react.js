// @flow
import * as React from "react";
import Nav from "../Nav";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
  +RootComponent?: React.ElementType,
  +to?: string, // this is so you can easily use with React router Link/NavLink
  +icon?: string, // so you can pass an icon down to the RootComponent
|};

function NavItem({
  children,
  RootComponent,
  value,
  className,
  to,
  icon,
}: Props): React.Node {
  const Component = RootComponent || "li";
  return (
    <Component className="nav-item" to={to} icon={icon}>
      <React.Fragment>
        <Nav.Link className={className}>{value}</Nav.Link>
        {children}
      </React.Fragment>
    </Component>
  );
}

export default NavItem;
