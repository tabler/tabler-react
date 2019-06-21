import React, { useContext, forwardRef } from "react";
import cn from "classnames";
import NavSubItem, { NavSubItemProps } from "./NavSubItem";
import NavLink, { NavLinkProps } from "./NavLink";
import Dropdown from "../Dropdown";
import ClickOutside, { useClickOutside } from "../../helpers/ClickOutside";

import { Manager, Reference } from "react-popper";
import { ReferenceChildrenProps } from "react-popper";
import withDropdownProvider from "../Dropdown/withDropdownProvider";
import DropdownContext from "../Dropdown/DropdownContext";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface NavItemProps extends TablerComponent {
  as?: React.ElementType;
  linkAs?: React.ElementType;
  linkProps?: NavLinkProps;
  value?: string;
  /**
   * @deprecated use 'linkAs'
   */
  LinkComponent?: React.ElementType;
  /**
   * @deprecated use 'linkProps'
   */
  href?: string;
  /**
   * @deprecated use 'linkProps'
   */
  to?: string;
  /**
   * @deprecated use 'linkProps'
   */
  icon?: string;
  /**
   * @deprecated use 'as'
   */
  type?: "li" | "div";
  /**
   * Make this item behave like it has a subNav even if you dont use subItems or subItemsObjects
   */
  hasSubNav?: boolean;
  onClick?: () => void;
  /**
   * @deprecated use 'linkProps'
   * Display this item in an active, or currently viewing, state
   */
  active?: boolean;
  subItems?: React.ReactElement<NavSubItemProps>[];
  subItemsObjects?: Array<NavSubItemProps>;
  /**
   * Position of the subnav Dropdown
   */
  position?: any;
  /**
   * @deprecated use 'linkProps'
   * Whether or not to pass "exact" property to underlying NavLink component
   */
  useExact?: boolean;
  /**
   * Will wrap children in a NavLink
   */
  link?: boolean;
  [key: string]: any;
}

/**
 * A NavItem with react-popper powered subIems Dropdowns
 */
export const NavItem = function(
  {
    children,
    LinkComponent,
    value,
    className,
    href,
    to,
    type,
    icon,
    hasSubNav: forcedHasSubNav,
    active,
    subItems,
    subItemsObjects,
    useExact,
    position = "bottom-start",
    onClick,
    as = El.Li,
    linkAs,
    linkProps,
    link = true,
    ...props
  }: NavItemProps,
  ref: React.Ref<any>
) {
  const [isOpen, setIsOpen] = useContext(DropdownContext);

  const Component = type || as;
  const _linkAs = LinkComponent || linkAs;
  const _linkProps = {
    ...linkProps,
    href,
    to,
    icon,
    active,
  };

  const _handleOnClick = (): void => {
    if (hasSubNav) {
      setIsOpen(!isOpen);
    }
    if (onClick) onClick();
  };

  const hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects;

  const navLink = link ? (
    (typeof children === "string" || value) && hasSubNav ? (
      <Reference>
        {({ ref }: ReferenceChildrenProps) => (
          <NavLink as={_linkAs} rootRef={ref} {..._linkProps}>
            {!hasSubNav && typeof children === "string" ? children : value}
          </NavLink>
        )}
      </Reference>
    ) : (
      <NavLink as={_linkAs} {..._linkProps}>
        {!hasSubNav && typeof children === "string" ? children : value}
      </NavLink>
    )
  ) : null;

  const childrenForAll = (
    <React.Fragment>
      {navLink}
      {typeof children !== "string" && !hasSubNav && children}
      {hasSubNav && (
        <Dropdown.Menu arrow position={position}>
          {subItems ||
            (subItemsObjects &&
              subItemsObjects.map((a, i) => <NavSubItem key={i} {...a} />)) ||
            children}
        </Dropdown.Menu>
      )}
    </React.Fragment>
  );

  const wrapperClasses = cn(
    {
      "nav-item": true,
      show: isOpen,
    },
    className
  );

  const outsideRef = useClickOutside(() => {
    setIsOpen(false);
  });

  if (hasSubNav) {
    return (
      <Manager>
        <Component
          className={wrapperClasses}
          onClick={_handleOnClick}
          ref={outsideRef}
          {...props}
        >
          {childrenForAll}
        </Component>
      </Manager>
    );
  }

  return (
    <Component
      className={wrapperClasses}
      onClick={_handleOnClick}
      ref={ref}
      {...props}
    >
      {childrenForAll}
    </Component>
  );
};

/** @component */
export default withDropdownProvider(forwardRef(NavItem));
