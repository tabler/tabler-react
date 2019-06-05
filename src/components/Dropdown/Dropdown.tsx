import React, { useState } from "react";
import cn from "classnames";
import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownItemDivider from "./DropdownItemDivider";

import ClickOutside from "../../helpers/ClickOutside";

import { Manager } from "react-popper";

interface TriggerElement {
  onClick: (e: React.MouseEvent) => any;
}
export interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * This dropdown should only be displayed on desktop
   */
  desktopOnly?: boolean;
  /**
   * The trigger component for this Dropdown
   */
  trigger?: any;
  /**
   * Is this Dropdown a Card option?
   */
  isOption?: boolean;
  /**
   * Add flex classes to the Dropdown
   */
  flex?: boolean | "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Any additional classNames for the trigger component
   */
  triggerClassName?: string;
  /**
   * Is this Dropdown being used as a Nav Link?
   */
  isNavLink?: boolean;
  /**
   * Should the trigger render a link or a buttton
   */
  type?: "link" | "button";
  /**
   * An Icon to be displayed within the trigger
   */
  icon?: string;
  /**
   * The trigger content
   */
  triggerContent?: React.ReactNode;
  /**
   * The triggers background color
   */
  color?: string;
  /**
   * Should the trigger display an arrow toggler?
   */
  toggle?: boolean;
  items?: React.ReactNode;
  dropdownMenuClassName?: string;
  /**
   * The DropdownMenu position
   */
  position?: any;
  /**
   * Display an arrow between the trigger and menu?
   */
  arrow?: boolean;
  /**
   * The position of the arrow between the trigger and menu
   */
  arrowPosition?: "left" | "right";

  /**
   * The items for this Dropdowns menu in object form
   */
  itemsObject?: Array<itemObject>;
  /**
   * The default RootComponent for all itemsObjects.
   * itemsObjects[x].RootComponent takes priority
   */
  itemsRootComponent?: React.ElementType;
}

export type itemObject = {
  icon?: string;
  badge?: string;
  badgeType?: string;
  value?: string;
  isDivider?: boolean;
  to?: string;
  RootComponent?: React.ElementType;
  onClick?: (event: React.MouseEvent) => any;
};
type Props = DefaultProps;

const Dropdown = function({
  className,
  children,
  desktopOnly,
  isOption,
  flex = false,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const _handleTriggerOnClick = (
    e: React.MouseEvent<Element>,
    o?: { onClick: React.MouseEventHandler }
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (o && o.onClick) {
      o.onClick(e);
    }
  };

  const _handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    callback?: (e: React.MouseEvent<any>) => any
  ) => {
    setIsOpen(false);
    if (callback) {
      callback(e);
    }
  };

  const classes = cn(
    {
      dropdown: true,
      "d-none": desktopOnly,
      "d-md-flex": desktopOnly || flex === "md",
      [`d-{flex}-flex`]:
        (typeof flex !== "boolean" &&
          ["xs", "sm", "lg", "xl"].includes(flex)) ||
        flex,
      "d-flex": flex === true,
      "card-options-dropdown": isOption,
      show: isOpen,
    },
    className
  );

  const trigger = (() => {
    if (props.trigger) {
      return React.cloneElement(props.trigger, {
        onClick: (e: React.MouseEvent<any>) =>
          _handleTriggerOnClick(e, props.trigger),
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
          onClick={_handleTriggerOnClick}
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
      return itemsObject.map((item, i) =>
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
            onClick={(e: React.MouseEvent<any>) =>
              _handleItemClick(e, item.onClick)
            }
          />
        )
      );
    }
    return null;
  })();

  const menu = (() => {
    if (props.items) {
      const { position, arrow, arrowPosition, dropdownMenuClassName } = props;
      return (
        <DropdownMenu
          position={position}
          arrow={arrow}
          arrowPosition={arrowPosition}
          className={dropdownMenuClassName}
          show={isOpen}
        >
          {items}
        </DropdownMenu>
      );
    }
    return null;
  })();

  return (
    <Manager>
      <ClickOutside onOutsideClick={() => setIsOpen(false)}>
        {({ setElementRef }: any) => (
          <div className={classes} ref={setElementRef}>
            {trigger}
            {menu || children}
          </div>
        )}
      </ClickOutside>
    </Manager>
  );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.ItemDivider = DropdownItemDivider;

export default Dropdown;
