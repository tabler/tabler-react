// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
function DropdownItemDivider(props: Props): React.Node {
  return <div className="dropdown-divider">{props.children}</div>;
}

DropdownItemDivider.displayName = "Dropdown.ItemDivider";

export default DropdownItemDivider;
