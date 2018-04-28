// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";
import ButtonList from "./ButtonList.react";

type PropsForAll = {|
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
  +isDropdownToggle?: boolean,
  +to?: string,
|};

type DefaultButtonComponent = {|
  ...PropsForAll,
  +RootComponent?: "button",
  +type?: "button" | "submit" | "reset",
  +value?: string,
  +onClick?: (event: SyntheticMouseEvent<HTMLInputElement>) => mixed,
|};

type BtnAComponent = {|
  ...PropsForAll,
  +RootComponent: "a",
  +href?: string,
  +target?: string,
  +onClick?: (SyntheticMouseEvent<HTMLLinkElement>) => mixed,
|};

type BtnInputComponent = {|
  ...PropsForAll,
  +RootComponent: "input",
  +type?: "button" | "submit" | "reset",
  +value?: string,
  +onClick?: (SyntheticMouseEvent<HTMLInputElement>) => mixed,
|};

type Props = DefaultButtonComponent | BtnAComponent | BtnInputComponent;

const Button = (props: Props): React.Node => {
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
    isDropdownToggle,
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
    },
    className
  );

  const propsForAll = {
    className: classes,
    disabled: disabled,
    "data-toggle": isDropdownToggle && "dropdown",
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
    const { type, value, onClick } = props;
    return (
      <button {...propsForAll} type={type} value={value} onClick={onClick}>
        {childrenForAll}
      </button>
    );
  } else if (props.RootComponent === "input") {
    const { type, value, onClick } = props;

    return (
      <input {...propsForAll} type={type} value={value} onClick={onClick}>
        {childrenForAll}
      </input>
    );
  } else if (props.RootComponent === "a") {
    const { href, target, onClick } = props;

    return (
      <a {...propsForAll} href={href} target={target} onClick={onClick}>
        {childrenForAll}
      </a>
    );
  } else {
    const { onClick, to } = props;

    const Component: React.ElementType = props.RootComponent;

    return (
      <Component {...propsForAll} to={to} onClick={onClick}>
        {childrenForAll}
      </Component>
    );
  }
};

Button.List = ButtonList;

export default Button;
