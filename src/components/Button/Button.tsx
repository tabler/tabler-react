import React, { forwardRef } from "react";
import cn from "classnames";
import Icon from "../Icon";

import { RefHandler } from "react-popper";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import { colors } from "../../colors";

export type ButtonProps<
  As extends React.ElementType = "button"
> = TablerComponentProps<
  As,
  {
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
    /**
     * @depreacted use ref
     */
    rootRef?: RefHandler;
  }
>;

const Button = forwardRef(function <As extends React.ElementType = "button">(
  {
    size,
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
    RootComponent,
    as,
    rootRef,
    ...rest
  }: ButtonProps<As>,
  ref: any
) {
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

  const Component = RootComponent || as || El.Button;

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
    <Component className={classes} ref={rootRef || ref} {...rest}>
      {childrenForAll}
    </Component>
  );
});

export default Button;
