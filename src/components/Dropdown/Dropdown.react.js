// @flow

import * as React from "react";
import cn from "classnames";
import DropdownTrigger from "./DropdownTrigger.react";
import DropdownMenu from "./DropdownMenu.react";
import DropdownItem from "./DropdownItem.react";
import DropdownItemDivider from "./DropdownItemDivider.react";

type DefaultProps = {|
  +children?: React.Node,
  +className?: string,
  +desktopOnly?: boolean,
|};

type WithTriggerProps = {|
  ...DefaultProps,
  +trigger: React.Node,
  +icon?: string,
  +isNavLink?: boolean,
  +type?: "link" | "button",
|};

type Props = DefaultProps | WithTriggerProps;

function Dropdown(props: Props): React.Node {
  const { className, children, desktopOnly } = props;

  const classes = cn(
    { dropdown: true, "d-none": desktopOnly, "d-md-flex": desktopOnly },
    className
  );
  const trigger = props.trigger && (
    <DropdownTrigger
      isNavLink={props.isNavLink}
      icon={props.icon}
      type={props.type}
    >
      {props.trigger}
    </DropdownTrigger>
  );

  return (
    <div className={classes}>
      {trigger}
      {children}
    </div>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

export default Dropdown;
