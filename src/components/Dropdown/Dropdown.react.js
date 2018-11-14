// @flow

import * as React from "react";
import cn from "classnames";
import DropdownTrigger from "./DropdownTrigger.react";
import DropdownMenu from "./DropdownMenu.react";
import DropdownItem from "./DropdownItem.react";
import DropdownItemDivider from "./DropdownItemDivider.react";

import ClickOutside from "../../helpers/ClickOutside.react";

import { Manager } from "react-popper";

import type { Placement } from "react-popper";

type DefaultProps = {|
  +children?: React.Node,
  +className?: string,
  /**
   * This dropdown should only be displayed on desktop
   */
  +desktopOnly?: boolean,
  /**
   * The trigger component for this Dropdown
   */
  +trigger?: React.Element<*>,
  /**
   * Is this Dropdown a Card option?
   */
  +isOption?: boolean,
  /**
   * Add flex classes to the Dropdown
   */
  +flex?: boolean | "xs" | "sm" | "md" | "lg" | "xl",
|};

type WithAnyTriggerProps = {|
  ...DefaultProps,
  /**
   * Any additional classNames for the trigger component
   */
  +triggerClassName?: string,
  /**
   * Is this Dropdown being used as a Nav Link?
   */
  +isNavLink?: boolean,
  /**
   * Should the trigger render a link or a buttton
   */
  +type?: "link" | "button",
  /**
   * An Icon to be displayed within the trigger
   */
  +icon?: string,
  /**
   * The trigger content
   */
  +triggerContent?: React.Node,
  /**
   * The triggers background color
   */
  +color?: string,
  /**
   * Should the trigger display an arrow toggler?
   */
  +toggle?: boolean,
|};

type WithTriggerContentProps = {|
  ...WithAnyTriggerProps,
  /**
   * The trigger content
   */
  +triggerContent: React.Node,
|};

type WithIconProps = {|
  ...WithAnyTriggerProps,
  /**
   * For a trigger to contain only an Icon
   */
  +icon: string,
|};

type AllTriggerProps = WithTriggerContentProps | WithIconProps;

type WithItemsProps = {|
  ...DefaultProps,
  ...WithAnyTriggerProps,
  +triggerContent?: React.Node,
  +items: React.Node,
  +dropdownMenuClassName?: string,
  /**
   * The DropdownMenu position
   */
  +position?: Placement,
  /**
   * Display an arrow between the trigger and menu?
   */
  +arrow?: boolean,
  /**
   * The position of the arrow between the trigger and menu
   */
  +arrowPosition?: "left" | "right",
|};

export type itemObject = {|
  +icon?: string,
  +badge?: string,
  +badgeType?: string,
  +value?: string,
  +isDivider?: boolean,
  +to?: string,
  +RootComponent?: React.ElementType,
  +onClick?: (event: SyntheticMouseEvent<*>) => mixed,
|};

type WithItemsObjectProp = {|
  ...DefaultProps,
  ...WithAnyTriggerProps,
  /**
   * The items for this Dropdowns menu
   */
  +items?: React.Node,
  /**
   * The items for this Dropdowns menu in object form
   */
  +itemsObject: Array<itemObject>,
  /**
   * Any additional classNames for the DropdownMenu
   */
  +dropdownMenuClassName?: string,
  +position?: Placement,
  +arrow?: boolean,
  +arrowPosition?: "left" | "right",
  /**
   * The default RootComponent for all itemsObjects.
   * itemsObjects[x].RootComponent takes priority
   */
  +itemsRootComponent?: React.ElementType,
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

  _handleTriggerOnClick = (e: SyntheticMouseEvent<HTMLElement>, o?: Object) => {
    e.preventDefault();
    this.setState(s => ({ isOpen: !s.isOpen }));
    if (o && o.onClick) {
      o.onClick(e);
    }
  };

  _handleItemClick = (
    e: SyntheticMouseEvent<HTMLElement>,
    callback?: (SyntheticMouseEvent<*>) => mixed
  ) => {
    this.setState({ isOpen: false });
    if (callback) {
      callback(e);
    }
  };

  render(): React.Node {
    const {
      className,
      children,
      desktopOnly,
      isOption,
      flex = false,
      ...props
    } = this.props;

    const classes = cn(
      {
        dropdown: true,
        "d-none": desktopOnly,
        "d-md-flex": desktopOnly || flex === "md",
        [`d-{flex}-flex`]: ["xs", "sm", "lg", "xl"].includes(flex),
        "d-flex": flex === true,
        "card-options-dropdown": isOption,
        show: this.state.isOpen,
      },
      className
    );

    const trigger = (() => {
      if (props.trigger) {
        return React.cloneElement(props.trigger, {
          onClick: e => this._handleTriggerOnClick(e, props.trigger),
        });
        // return props.trigger;
      }
      if (props.icon || props.triggerContent || props.toggle) {
        const {
          icon,
          triggerContent,
          isNavLink,
          type,
          triggerClassName,
          color,
          toggle,
        } = props;

        return (
          <DropdownTrigger
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
        );
      }
      return null;
    })();

    const items = (() => {
      if (props.items) return props.items;
      if (props.itemsObject) {
        const { itemsObject, itemsRootComponent } = props;
        return itemsObject.map(
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
                to={item.to}
                RootComponent={item.RootComponent || itemsRootComponent}
                onClick={e => this._handleItemClick(e, item.onClick)}
              />
            )
        );
      }
      return null;
    })();

    const menu = (() => {
      if (props.items || props.itemsObject) {
        const { position, arrow, arrowPosition, dropdownMenuClassName } = props;
        return (
          <DropdownMenu
            position={position}
            arrow={arrow}
            arrowPosition={arrowPosition}
            className={dropdownMenuClassName}
            show={this.state.isOpen}
          >
            {items}
          </DropdownMenu>
        );
      }
      return null;
    })();

    return (
      <Manager>
        <ClickOutside onOutsideClick={() => this.setState({ isOpen: false })}>
          {({ setElementRef }) => (
            <div className={classes} ref={setElementRef}>
              {trigger}
              {menu || children}
            </div>
          )}
        </ClickOutside>
      </Manager>
    );
  }
}

export default Dropdown;
