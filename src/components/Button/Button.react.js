// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";
import ButtonList from "./ButtonList.react";

type Props = {|
  +size?: "sm" | "lg",
  +outline?: boolean,
  +primary?: boolean,
  +secondary?: boolean,
  +success?: boolean,
  +info?: boolean,
  +warning?: boolean,
  +danger?: boolean,
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
  +toggle?: boolean,
  +dataToggle?: string,
  +RootComponent?: React.ElementType
|};

const Button = ({
  size = "",
  outline,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
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
  toggle,
  RootComponent,
  dataToggle
}: Props): React.Node => {
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-block`]: block,
      [`btn-primary`]: primary && !outline,
      [`btn-secondary`]: secondary && !outline,
      [`btn-success`]: success && !outline,
      [`btn-info`]: info && !outline,
      [`btn-warning`]: warning && !outline,
      [`btn-danger`]: danger && !outline,
      [`btn-link`]: link,
      [`btn-outline-primary`]: outline && primary,
      [`btn-outline-secondary`]: outline && secondary,
      [`btn-outline-success`]: outline && success,
      [`btn-outline-info`]: outline && info,
      [`btn-outline-warning`]: outline && warning,
      [`btn-outline-danger`]: outline && danger,
      disabled: disabled,
      [`btn-${color}`]: !!color,
      [`btn-${social}`]: !!social,
      "btn-square": square,
      "btn-pill": pill,
      "btn-icon": !children,
      "btn-loading": loading,
      "dropdown-toggle": toggle
    },
    className
  );
  const Component = RootComponent || "button";
  const extraProps = dataToggle
    ? {
        "data-toggle": "dropdown"
      }
    : null;

  return Component === "input" ? (
    <Component className={classes} disabled={disabled}>
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
