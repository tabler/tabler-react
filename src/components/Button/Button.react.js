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
  +toggle?: boolean,
  +dataToggle?: string,
  +RootComponent?: React.ElementType,
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
  toggle,
  RootComponent,
  dataToggle,
}: Props): React.Node => {
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
      "dropdown-toggle": toggle,
    },
    className
  );
  const Component = RootComponent || "button";
  const extraProps = dataToggle
    ? {
        "data-toggle": "dropdown",
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
