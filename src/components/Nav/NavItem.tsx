import * as React from "react";
import cn from "classnames";
import NavSubItem from "./NavSubItem";
import NavLink from "./NavLink";
import { subNavItem } from "./Nav";
import Dropdown from "../Dropdown";
import ClickOutside from "../../helpers/ClickOutside";

import { Manager, Reference } from "react-popper";
import { ReferenceChildrenProps } from "react-popper";
interface Props {
  children?: React.ReactNode;
  className?: string;
  value?: string;
  LinkComponent?: React.ElementType;
  href?: string;
  to?: string;
  icon?: string;
  type?: "li" | "div";
  /**
   * Make this item behave like it has a subNav even if you dont use subItems or subItemsObjects
   */
  hasSubNav?: boolean;
  onClick?: () => void;
  /**
   * Display this item in an active, or currently viewing, state
   */
  active?: boolean;
  subItems?: React.ReactElement<typeof NavSubItem>[];
  subItemsObjects?: Array<subNavItem>;
  /**
   * Position of the subnav Dropdown
   */
  position?: any;
  /**
   * Whether or not to pass "exact" property to underlying NavLink component
   */
  useExact?: boolean;
}

type State = {
  isOpen: boolean;
};

/**
 * A NavItem with react-popper powered subIems Dropdowns
 */
class NavItem extends React.Component<Props, State> {
  displayName = "Nav.Item";

  state = {
    isOpen: false,
  };

  _handleOnClick = (): void => {
    if (this.props.hasSubNav) {
      this.setState(s => ({ isOpen: !s.isOpen }));
    }
    if (this.props.onClick) this.props.onClick();
  };

  render() {
    const {
      children,
      LinkComponent,
      value,
      className,
      to,
      type = "li",
      icon,
      hasSubNav: forcedHasSubNav,
      active,
      subItems,
      subItemsObjects,
      useExact,
      position = "bottom-start",
    }: Props = this.props;

    const hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects;

    const navLink =
      (typeof children === "string" || value) && hasSubNav ? (
        <Reference>
          {({ ref }: ReferenceChildrenProps) => (
            <NavLink
              className={className}
              to={to}
              icon={icon}
              RootComponent={LinkComponent}
              hasSubNav={hasSubNav}
              active={active}
              rootRef={ref}
              useExact={useExact}
            >
              {!hasSubNav && typeof children === "string" ? children : value}
            </NavLink>
          )}
        </Reference>
      ) : (
        <NavLink
          className={className}
          to={to}
          icon={icon}
          RootComponent={LinkComponent}
          hasSubNav={hasSubNav}
          active={active}
          useExact={useExact}
        >
          {!hasSubNav && typeof children === "string" ? children : value}
        </NavLink>
      );

    const childrenForAll = (
      <React.Fragment>
        {navLink}
        {typeof children !== "string" && !hasSubNav && children}
        {hasSubNav && (
          <Dropdown.Menu arrow show={this.state.isOpen} position={position}>
            {subItems ||
              (subItemsObjects &&
                subItemsObjects.map((a, i) => (
                  <NavSubItem
                    key={i}
                    value={a.value}
                    to={a.to}
                    icon={a.icon}
                    LinkComponent={a.LinkComponent}
                    useExact={a.useExact}
                  />
                ))) ||
              children}
          </Dropdown.Menu>
        )}
      </React.Fragment>
    );

    const wrapperClasses = cn({
      "nav-item": true,
      show: this.state.isOpen,
    });

    const wrappedChildren =
      type === "div" ? (
        <ClickOutside onOutsideClick={() => this.setState({ isOpen: false })}>
          {({ setElementRef }: any) => (
            <div
              className={wrapperClasses}
              onClick={this._handleOnClick}
              ref={setElementRef}
            >
              {childrenForAll}
            </div>
          )}
        </ClickOutside>
      ) : (
        <ClickOutside onOutsideClick={() => this.setState({ isOpen: false })}>
          {({ setElementRef }: any) => (
            <li
              className={wrapperClasses}
              onClick={this._handleOnClick}
              ref={setElementRef}
            >
              {childrenForAll}
            </li>
          )}
        </ClickOutside>
      );

    return hasSubNav ? <Manager>{wrappedChildren}</Manager> : wrappedChildren;
  }
}

/** @component */
export default NavItem;
