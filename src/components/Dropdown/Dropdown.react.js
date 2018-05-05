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
  +isOption?: boolean,
|};

type WithAnyTriggerProps = {|
  ...DefaultProps,
  +triggerClassName?: string,
  +isNavLink?: boolean,
  +type?: "link" | "button",
  +icon?: string,
  +triggerContent?: React.Node,
  +color?: string,
|};

type WithTriggerContentProps = {|
  ...WithAnyTriggerProps,
  +triggerContent: React.Node,
|};

type WithIconProps = {|
  ...WithAnyTriggerProps,
  +icon: string,
|};

type AllTriggerProps = WithTriggerContentProps | WithIconProps;

type WithItemsProps = {|
  ...DefaultProps,
  ...WithAnyTriggerProps,
  +triggerContent?: React.Node,
  +items: React.Node,
  +dropdownMenuClassName?: string,
  +position?: string,
  +arrow?: boolean,
|};

type WithItemsObjectProp = {|
  ...DefaultProps,
  ...WithAnyTriggerProps,
  +items?: React.Node,
  +itemsObject: Array<{
    +icon?: string,
    +badge?: string,
    +badgeType?: string,
    +value?: string,
    +isDivider?: boolean,
  }>,
  +dropdownMenuClassName?: string,
  +position?: string,
  +arrow?: boolean,
|};

type Props =
  | DefaultProps
  | AllTriggerProps
  | WithItemsProps
  | WithItemsObjectProp;

function Dropdown(props: Props): React.Node {
  const { className, children, desktopOnly, isOption } = props;

  const classes = cn(
    {
      dropdown: true,
      "d-none": desktopOnly,
      "d-md-flex": desktopOnly,
      "card-options-dropdown": isOption,
    },
    className
  );

  const trigger =
    props.trigger ||
    ((props.icon || props.triggerContent) && (
      <DropdownTrigger
        isNavLink={props.isNavLink}
        icon={props.icon}
        type={props.type}
        className={props.triggerClassName}
        isOption={isOption}
        color={props.color}
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
              badgeType={item.badgeType}
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
