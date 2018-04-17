// @flow
import * as React from "react";
import Nav from "../Nav";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
|};

function NavItem({ children, value, ...rest }: Props): React.Node {
  return (
    <li className="nav-item">
      <React.Fragment>
        <Nav.Link {...rest}>{value}</Nav.Link>
        {children}
      </React.Fragment>
    </li>
  );
}

export default NavItem;
