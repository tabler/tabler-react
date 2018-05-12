// @flow

import * as React from "react";
import cn from "classnames";
import DropdownTrigger from "./DropdownTrigger.react";
import DropdownMenu from "./DropdownMenu.react";
import DropdownItem from "./DropdownItem.react";
import DropdownItemDivider from "./DropdownItemDivider.react";

import { Manager, Reference, Popper } from "react-popper";

import type {
  PopperChildrenProps,
  Placement,
  ReferenceChildrenProps,
} from "react-popper";

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
  +toggle?: boolean,
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
  +position?: Placement,
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
  +position?: Placement,
  +arrow?: boolean,
|};

type Props =
  | DefaultProps
  | AllTriggerProps
  | WithItemsProps
  | WithItemsObjectProp;

type State = {
  isOpen: boolean,
};

class Dropdown extends React.Component<Props, State> {
  state = { isOpen: false };

  static Trigger = DropdownTrigger;
  static Menu = DropdownMenu;
  static Item = DropdownItem;
  static ItemDivider = DropdownItemDivider;

  _handleTriggerOnClick = () => {
    this.setState(s => ({ isOpen: !s.isOpen }));
  };

  render(): React.Node {
    const { className, children, desktopOnly, isOption }: Props = this.props;

    const classes = cn(
      {
        dropdown: true,
        "d-none": desktopOnly,
        "d-md-flex": desktopOnly,
        "card-options-dropdown": isOption,
      },
      className
    );

    const trigger = (() => {
      if (this.props.trigger) return this.props.trigger;
      if (this.props.icon || this.props.triggerContent) {
        const {
          icon,
          triggerContent,
          isNavLink,
          type,
          triggerClassName,
          color,
          toggle,
        } = this.props;

        return (
          <Reference>
            {({ ref }: ReferenceChildrenProps) => (
              <DropdownTrigger
                rootRef={ref}
                isNavLink={isNavLink}
                icon={icon}
                type={type}
                className={triggerClassName}
                isOption={isOption}
                color={color}
                toggle={toggle}
                onClick={this._handleTriggerOnClick}
              >
                {triggerContent}
              </DropdownTrigger>
            )}
          </Reference>
        );
      }
      return null;
    })();

    const items = (() => {
      if (this.props.items) return this.props.items;
      if (this.props.itemsObject) {
        return this.props.itemsObject.map(
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
        );
      }
      return null;
    })();

    const menu = (() => {
      if (this.props.items || this.props.itemsObject) {
        const { position, arrow, dropdownMenuClassName } = this.props;
        return (
          <Popper placement={position}>
            {({ ref, style, placement, arrowProps }: PopperChildrenProps) => (
              <DropdownMenu
                position={placement}
                arrow={arrow}
                className={dropdownMenuClassName}
                rootRef={ref}
                style={style}
                show={this.state.isOpen}
              >
                {items}
              </DropdownMenu>
            )}
          </Popper>
        );
      }
      return null;
    })();

    return (
      <Manager>
        <div className={classes}>
          {trigger}
          {menu || children}
        </div>
      </Manager>
    );
  }
}

export default Dropdown;
