// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";

import type { MouseEvents, PointerEvents, FocusEvents } from "../../";

type PropsForAll = {|
  ...MouseEvents,
  ...PointerEvents,
  ...FocusEvents,
  +children?: React.Node,
  +className?: string,
  +icon?: string,
  +color?: string,
|};

type DefaultProps = {| ...PropsForAll |};

type PropsForLink = {|
  ...PropsForAll,
  link: true,
  +href?: string,
|};

type PropsForReactRouter = {|
  ...PropsForAll,
  +RootComponent: React.ElementType,
  +to: string,
|};

type Props = DefaultProps | PropsForLink | PropsForReactRouter;

function TagAddOn(props: Props): React.Node {
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

  const classes = cn("tag-addon", { [`tag-${color}`]: color }, className);

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

TagAddOn.displayName = "Tag.AddOn";

export default TagAddOn;
