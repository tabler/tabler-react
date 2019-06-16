import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactHTMLElement,
  HTMLProps,
} from "react";
import cn from "classnames";
import Icon from "../Icon";

import { RefHandler } from "react-popper";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import { HTMLPropsWithoutRef } from "../../types";

interface Props {
  as?: React.ElementType;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  size?: "sm" | "lg";
  outline?: boolean;
  link?: boolean;
  block?: boolean;
  disabled?: boolean;
  color?: colors;
  square?: boolean;
  pill?: boolean;
  icon?: string;
  social?: string;
  loading?: boolean;
  tabIndex?: number;
  isDropdownToggle?: boolean;
  to?: string;
  isOption?: boolean;
  rootRef?: RefHandler;
}

export interface ButtonProps<AS extends HTMLElement = HTMLButtonElement>
  extends Props,
    ELProps,
    Omit<HTMLPropsWithoutRef<AS>, "as" | "color" | "size"> {}

const Button = function<AS extends HTMLElement = HTMLButtonElement>({
  size,
  onClick,
  href,
  outline,
  link,
  block,
  className,
  children,
  color,
  square,
  pill,
  icon,
  social = "",
  loading,
  isDropdownToggle,
  isOption,
  rootRef,
  RootComponent,
  as = El.Button,
  ...rest
}: ButtonProps<AS>) {
  const classes = cn(
    {
      btn: true,
      [`btn-${size}`]: !!size,
      [`btn-block`]: block,
      [`btn-outline-${color}`]: outline && !!color,
      [`btn-link`]: link,
      disabled: rest.disabled,
      [`btn-${color}`]: !!color && !outline,
      [`btn-${social}`]: !!social,
      "btn-square": square,
      "btn-pill": pill,
      "btn-icon": !children,
      "btn-loading": loading,
      "dropdown-toggle": isDropdownToggle,
      "btn-option": isOption,
    },
    className
  );

  const Component = RootComponent || as;

  const childrenForAll = (
    <React.Fragment>
      {social ? (
        <Icon name={social} prefix="fa" className={children ? "mr-2" : ""} />
      ) : icon ? (
        <Icon name={icon} className={children ? "mr-2" : ""} />
      ) : null}
      {children}
    </React.Fragment>
  );

  return (
    <Component className={classes} ref={rootRef} {...rest}>
      {childrenForAll}
    </Component>
  );
};

export default Button;
