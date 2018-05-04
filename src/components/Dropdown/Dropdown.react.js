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
  +trigger?: React.Node,
|};

type WithTriggerContentProps = {|
  ...DefaultProps,
  +triggerContent: React.Node,
  +triggerClassName?: string,
  +icon?: string,
  +isNavLink?: boolean,
  +type?: "link" | "button",
|};

type WithItemsProps = {|
  ...DefaultProps,
  ...WithTriggerContentProps,
  +triggerContent?: React.Node,
  +items: React.Node,
  +dropdownMenuClassName?: string,
  +position?: string,
  +arrow?: boolean,
|};

type WithItemsObjectProp = {|
  ...DefaultProps,
  ...WithTriggerContentProps,
  +items?: React.Node,
  +itemsObject: Array<{
    +icon?: string,
    +badge?: string,
    +value?: string,
    +isDivider?: boolean,
  }>,
  +dropdownMenuClassName?: string,
  +position?: string,
  +arrow?: boolean,
|};

type Props =
  | DefaultProps
  | WithTriggerContentProps
  | WithItemsProps
  | WithItemsObjectProp;

function Dropdown(props: Props): React.Node {
  const { className, children, desktopOnly } = props;

  const classes = cn(
    { dropdown: true, "d-none": desktopOnly, "d-md-flex": desktopOnly },
    className
  );

  const trigger =
    props.trigger ||
    (props.triggerContent && (
      <DropdownTrigger
        isNavLink={props.isNavLink}
        icon={props.icon}
        type={props.type}
        className={props.triggerClassName}
      >
        {props.triggerContent}
      </DropdownTrigger>
    ));

  const items =
    props.items ||
    (props.itemsObject &&
      props.itemsObject.map(
        (item, i) =>
          item.isDivider ? (
            <Dropdown.ItemDivider key={i} />
          ) : (
            <Dropdown.Item
              icon={item.icon}
              badge={item.badge}
              value={item.value}
              key={i}
            />
          )
      ));

  const menu = (props.items || props.itemsObject) && (
    <DropdownMenu
      position={props.position}
      arrow={props.arrow}
      className={props.dropdownMenuClassName}
    >
      {items}
    </DropdownMenu>
  );

  return (
    <div className={classes}>
      {trigger}
      {menu || children}
    </div>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

export default Dropdown;
