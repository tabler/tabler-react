import React, { useContext, forwardRef, useState } from "react";
import cn from "classnames";
import NavLink, { NavLinkProps } from "./NavLink";
import { useClickOutside } from "../../helpers/ClickOutside";
import { TablerComponent } from "../../types";
import El from "../El/El";
import NavSubNav from "./NavSubNav";
import NavSubNavContext from "./NavSubNavContext";

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
  subItems?: React.ReactNode;
  subItemsObjects?: Array<NavItemProps>;
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
  subNav?: React.ReactNode;
  [key: string]: any;
}

export const NavItem: React.RefForwardingComponent<
  any,
  NavItemProps
> = forwardRef<any, NavItemProps>(function(
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
    subNav,
    ...props
  }: NavItemProps,
  ref: React.Ref<any>
) {
  const [isOpen, setIsOpen] = useState(false);
  // context is used so that we only apply on click outside handler to the top level nav item
  const topLevelSubNavContext = useContext(NavSubNavContext);
  const hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects;
  const _isTopLevelSubNav =
    (subNav || hasSubNav) && topLevelSubNavContext === false;

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
    if (subNav || hasSubNav) {
      setIsOpen(!isOpen);
    }
    if (onClick) onClick();
  };

  const navLink = link ? (
    <NavLink
      as={_linkAs}
      collapsed={(subNav || hasSubNav) && isOpen === false}
      onClick={_handleOnClick}
      {..._linkProps}
    >
      {value || children}
    </NavLink>
  ) : (
    value || (!hasSubNav && children)
  );

  const wrapperClasses = cn(
    {
      "nav-item": true,
      show: isOpen,
    },
    className
  );

  const _ref = _isTopLevelSubNav
    ? useClickOutside(() => {
        setIsOpen(false);
      }, ref)
    : ref;

  const _navItem = (
    <Component className={wrapperClasses} ref={_ref} {...props}>
      <React.Fragment>
        {navLink}
        {subNav && isOpen && <NavSubNav show={isOpen}>{subNav}</NavSubNav>}
        {hasSubNav && isOpen && (
          <NavSubNav show={isOpen}>
            {subItems ||
              (subItemsObjects &&
                subItemsObjects.map((a, i) => <NavItem key={i} {...a} />)) ||
              children}
          </NavSubNav>
        )}
      </React.Fragment>
    </Component>
  );

  if (_isTopLevelSubNav) {
    return (
      <NavSubNavContext.Provider value={true}>
        {_navItem}
      </NavSubNavContext.Provider>
    );
  }

  return _navItem;
});

/** @component */
export default NavItem;
