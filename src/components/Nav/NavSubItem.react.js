// @flow
import * as React from "react";
import Dropdown from "../Dropdown";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +LinkComponent?: React.ElementType,
  +to?: string,
  +icon?: string,
  +value?: string,
  +useExact?: boolean,
|};

function NavSubItem({
  children,
  LinkComponent,
  className,
  to,
  icon,
  hasSubNav,
  value,
  useExact,
}: Props): React.Node {
  return (
    <Dropdown.Item to={to} icon={icon} RootComponent={LinkComponent} useExact={useExact || false}>
      {value || children}
    </Dropdown.Item>
  );
}

NavSubItem.displayName = "Nav.SubItem";

export default NavSubItem;
