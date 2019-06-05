import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

import { MouseEvents, PointerEvents } from "../../types";
import { RefHandler } from "react-popper";

interface PropsForAll extends MouseEvents, PointerEvents {
  size?: "sm" | "lg";
  outline?: boolean;
  link?: boolean;
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: string;
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

export interface DefaultButtonComponent extends PropsForAll {
  RootComponent?: "button";
  type?: "button" | "submit" | "reset";
  value?: string;
}

interface BtnAComponent extends PropsForAll {
  RootComponent: "a";
  href?: string;
  target?: string;
}

interface BtnInputComponent extends PropsForAll {
  RootComponent: "input";
  type?: "button" | "submit" | "reset";
  value?: string;
}

export type Props = DefaultButtonComponent | BtnAComponent | BtnInputComponent;

const Button = (props: Props) => {
  const {
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
    tabIndex,
    isDropdownToggle,
    isOption,
    rootRef,
    to,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
  } = props;

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
      "btn-option": isOption,
    },
    className
  );

  const propsForAll = {
    className: classes,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    tabIndex: tabIndex,
  };

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

  if (!props.RootComponent || props.RootComponent === "button") {
    const { type, value } = props;
    return (
      <button {...propsForAll} type={type} value={value} ref={rootRef}>
        {childrenForAll}
      </button>
    );
  } else if (props.RootComponent === "input") {
    const { type, value } = props;
    return <input {...propsForAll} type={type} value={value} ref={rootRef} />;
  } else if (props.RootComponent === "a") {
    const { href, target } = props;
    return (
      <a {...propsForAll} href={href} target={target} ref={rootRef}>
        {childrenForAll}
      </a>
    );
  } else {
    const Component = props.RootComponent as any;
    return (
      <Component {...propsForAll} to={to}>
        {childrenForAll}
      </Component>
    );
  }
};

Button.displayName = "Button";

export default Button;
