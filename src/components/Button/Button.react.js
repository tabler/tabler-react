// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";
import ButtonList from "./ButtonList.react";

type Props = {|
  +size?: "sm" | "lg",
  +outline?: boolean,
  +link?: boolean,
  +block?: boolean,
  +className?: string,
  +children?: React.Node,
  +disabled?: boolean,
  +color?: string,
  +square?: boolean,
  +pill?: boolean,
  +icon?: string,
  +social?: string,
  +loading?: boolean,
  +RootComponent?: React.ElementType,
  +href?: string,
  +target?: string,
  +isDropdownToggle?: boolean,
  +onClick?: (SyntheticMouseEvent<HTMLLinkElement>) => boolean,
|};

const Button = ({
  size = "",
  outline,
  link,
  block,
  className,
  children,
  disabled,
  color = "",
  square,
  pill,
  icon,
  social = "",
  loading,
  isDropdownToggle,
  RootComponent,
  href,
  target,
  onClick,
}: Props): React.Node => {
  const onClickHandler =
    onClick || ((event: SyntheticMouseEvent<HTMLLinkElement>) => true);
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-block`]: block,
      [`btn-outline-${color}`]: outline && !!color,
      [`btn-link`]: link,
      disabled: disabled,
      [`btn-${color}`]: !!color && !outline,
      [`btn-${social}`]: !!social,
      "btn-square": square,
      "btn-pill": pill,
      "btn-icon": !children,
      "btn-loading": loading,
      "dropdown-toggle": isDropdownToggle,
    },
    className
  );
  const Component = RootComponent || "button";
  const extraProps = {
    href,
    target,
    onClick: onClickHandler,
    "data-toggle": isDropdownToggle && "dropdown",
  };

  return Component === "input" ? (
    <Component className={classes} disabled={disabled} {...extraProps}>
      {children}
    </Component>
  ) : (
    <Component className={classes} disabled={disabled} {...extraProps}>
      {social ? (
        <Icon name={social} prefix="fa" className={children ? "mr-2" : ""} />
      ) : icon ? (
        <Icon name={icon} className={children ? "mr-2" : ""} />
      ) : null}
      {children}
    </Component>
  );
};

Button.List = ButtonList;

export default Button;
