// @flow
import * as React from "react";
import cn from "classnames";
import Nav from "../Nav";
import Dropdown from "../Dropdown";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
  +LinkComponent?: React.ElementType,
  +href?: string,
  +to?: string,
  +icon?: string,
  +type?: "li" | "div",
  +hasSubNav?: boolean,
  +onClick?: () => void,
  +active?: boolean,
|};

type State = {
  isOpen: boolean,
};

class NavItem extends React.Component<Props, State> {
  displayName = "Nav.Item";

  state = {
    isOpen: false,
  };

  _handleOnClick = () => {
    if (this.props.hasSubNav) {
      this.setState(s => ({ isOpen: !s.isOpen }));
    }
    if (this.props.onClick) this.props.onClick();
  };

  render(): React.Node {
    const {
      children,
      LinkComponent,
      value,
      className,
      to,
      type = "li",
      icon,
      hasSubNav,
      active,
    }: Props = this.props;
    const navLink = (typeof children === "string" || value) && (
      <Nav.Link
        className={className}
        to={to}
        icon={icon}
        RootComponent={LinkComponent}
        hasSubNav={hasSubNav}
        active={active}
      >
        {!hasSubNav && typeof children === "string" ? children : value}
      </Nav.Link>
    );

    const childrenForAll = (
      <React.Fragment>
        {navLink}
        {typeof children !== "string" && !hasSubNav && children}
        {hasSubNav && (
          <Dropdown.Menu arrow show={this.state.isOpen}>
            {children}
          </Dropdown.Menu>
        )}
      </React.Fragment>
    );

    const wrapperClasses = cn({
      "nav-item": true,
      show: this.state.isOpen,
    });

    return type === "div" ? (
      <div className={wrapperClasses} onClick={this._handleOnClick}>
        {childrenForAll}
      </div>
    ) : (
      <li className={wrapperClasses} onClick={this._handleOnClick}>
        {childrenForAll}
      </li>
    );
  }
}

/** @component */
export default NavItem;
