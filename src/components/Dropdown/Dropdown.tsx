import React, { useContext, forwardRef } from "react";
import { Manager } from "react-popper";
import cn from "classnames";
import DropdownTrigger, { DropdownTriggerProps } from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem, { DropdownItemProps } from "./DropdownItem";
import DropdownItemDivider, {
  DropdownItemDividerProps,
} from "./DropdownItemDivider";

import { useClickOutside } from "../../helpers/ClickOutside";
import withDropdownProvider from "./withDropdownProvider";
import DropdownContext from "./DropdownContext";
import { colors } from "../../colors";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface DropdownProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
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
   * An Icon to be displayed within the trigger
   */
  icon?: string;
  /**
   * The trigger content
   */
  triggerContent?: React.ReactNode;
  /**
   * Component to render the trigger as
   */
  triggerAs?: React.ElementType<DropdownTriggerProps>;
  /**
   * The triggers background color
   */
  color?: colors;
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
  triggerProps?: DropdownTriggerProps;
}

export interface itemObject extends DropdownItemProps {
  isDivider?: boolean;
  dividerProps?: DropdownItemDividerProps;
  [key: string]: any;
}

const Dropdown = forwardRef(function (
  {
    className,
    children,
    desktopOnly,
    isOption,
    flex = false,
    items,
    trigger,
    icon,
    triggerContent,
    triggerAs,
    isNavLink,
    triggerClassName,
    color,
    toggle,
    itemsObject,
    itemsRootComponent,
    position,
    arrow,
    arrowPosition,
    dropdownMenuClassName,
    style,
    triggerProps,
    ...rest
  }: DropdownProps,
  ref
) {
  const [isOpen, setIsOpen] = useContext(DropdownContext);

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
      [`d-${flex}-flex`]:
        (typeof flex !== "boolean" &&
          ["xs", "sm", "lg", "xl"].includes(flex)) ||
        flex,
      "d-flex": flex === true,
      "card-options-dropdown": isOption,
      show: isOpen,
    },
    className
  );

  const _trigger =
    trigger ||
    (() => {
      if (icon || triggerContent || toggle) {
        return (
          <DropdownTrigger
            isNavLink={isNavLink}
            icon={icon}
            className={triggerClassName}
            isOption={isOption}
            color={color}
            toggle={toggle}
            as={triggerAs}
            {...triggerProps}
          >
            {triggerContent}
          </DropdownTrigger>
        );
      }
      return null;
    })();

  const _items =
    items ||
    (() => {
      if (itemsObject) {
        return itemsObject.map(
          ({ as, onClick, isDivider, dividerProps, ...item }, i) =>
            isDivider ? (
              <DropdownItemDivider key={i} {...dividerProps} />
            ) : (
              <DropdownItem
                key={i}
                as={as || itemsRootComponent}
                onClick={(e: React.MouseEvent<any>) =>
                  _handleItemClick(e, onClick)
                }
                {...item}
              />
            )
        );
      }
      return null;
    })();

  const menu = (() => {
    if (_items) {
      return (
        <DropdownMenu
          position={position}
          arrow={arrow}
          arrowPosition={arrowPosition}
          className={dropdownMenuClassName}
          show={isOpen}
        >
          {_items}
        </DropdownMenu>
      );
    }
    return null;
  })();

  const _ref = useClickOutside(() => setIsOpen(false), ref);

  return (
    <Manager>
      <El.Div className={classes} ref={_ref} {...rest}>
        {_trigger}
        {menu || children}
      </El.Div>
    </Manager>
  );
});

export default withDropdownProvider(Dropdown);
