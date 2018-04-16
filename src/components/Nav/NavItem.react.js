// @flow
import * as React from "react";
import Nav from "../Nav";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
|};

function NavItem({ children, value, ...rest }: Props): React.Node {
  <li className="nav-item">
    <React.Fragment>
      <Nav.Link children={value} {...rest} />
      {children && children}
    </React.Fragment>
  </li>;
}

export default NavItem;
