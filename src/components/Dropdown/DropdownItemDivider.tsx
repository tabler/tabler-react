// @flow

import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
function DropdownItemDivider(props: Props) {
  return <div className="dropdown-divider">{props.children}</div>;
}

DropdownItemDivider.displayName = "Dropdown.ItemDivider";

export default DropdownItemDivider;
