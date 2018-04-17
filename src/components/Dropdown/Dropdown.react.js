// @flow

import * as React from "react";
import cn from "classnames";
import DropdownTrigger from "./DropdownTrigger.react";
import DropdownMenu from "./DropdownMenu.react";
import DropdownItem from "./DropdownItem.react";
import DropdownItemDivider from "./DropdownItemDivider.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +desktopOnly?: boolean,
|};

function Dropdown({ className, children, desktopOnly }: Props): React.Node {
  const classes = cn(
    { dropdown: true, "d-none": desktopOnly, "d-md-flex": desktopOnly },
    className
  );
  return <div className={classes}>{children}</div>;
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

export default Dropdown;
