import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

import { MouseEvents, PointerEvents, FocusEvents } from "../../types";

interface PropsForAll extends MouseEvents, PointerEvents, FocusEvents {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  color?: string;
  link?: true;
  href?: string;
  RootComponent?: React.ElementType;
  to?: string;
}

interface DefaultProps extends PropsForAll {}

interface PropsForLink extends PropsForAll {
  link: true;
  href?: string;
}

interface PropsForReactRouter extends PropsForAll {
  RootComponent: React.ElementType;
  to: string;
}

export type Props = DefaultProps | PropsForLink | PropsForReactRouter;

export function BadgeAddOn(props: Props) {
  const {
    children,
    className,
    icon,
    color = "",
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
  } = props;

  const classes = cn("Badge-addon", { [`Badge-${color}`]: color }, className);

  const eventProps = {
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
  };

  const childrenForAll = (
    <React.Fragment>
      {icon && <Icon name={icon} />}
      {children}
    </React.Fragment>
  );

  if (props.link) {
    const { href } = props;
    return (
      <a className={classes} href={href} {...eventProps}>
        {childrenForAll}
      </a>
    );
  }

  if (props.RootComponent) {
    const { RootComponent: Component, to } = props;
    return (
      <Component to={to} {...eventProps}>
        {childrenForAll}
      </Component>
    );
  }

  return (
    <span className={classes} {...eventProps}>
      {childrenForAll}
    </span>
  );
}

export default BadgeAddOn;
