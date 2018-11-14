// @flow

import * as React from "react";
import cn from "classnames";

import type { MouseEvents, PointerEvents, FocusEvents } from "../../";

type Props = {|
  ...MouseEvents,
  ...PointerEvents,
  ...FocusEvents,
  +className?: string,
  /**
   * Should this icon be rendered within an <a> tag
   */
  +link?: boolean,
  /**
   * The icon prefix
   */
  +prefix?: string,
  /**
   * The icon name
   */
  +name: string,
  +isAriaHidden?: boolean,
  /**
   * Use the built-in payment icon set
   */
  +payment?: boolean,
  /**
   * Use the built-in flag icon set
   */
  +flag?: boolean,
|};

/**
 * Display an icon.
 * Uses the included feathers icon set by default but you can add your own
 */
function Icon({
  prefix: prefixFromProps = "fe",
  name,
  className,
  link,
  isAriaHidden,
  payment,
  flag,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
  onFocus,
  onBlur,
}: Props): React.Node {
  const prefix = (payment && "payment") || (flag && "flag") || prefixFromProps;
  const classes = cn(
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true,
    },
    className
  );
  const extraProps = isAriaHidden
    ? {
        "aria-hidden": "true",
      }
    : null;

  const eventProps = {
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onFocus,
    onBlur,
  };

  return !link ? (
    <i className={classes} {...eventProps} />
  ) : (
    <a className="icon" {...extraProps} {...eventProps}>
      <i className={classes} />
    </a>
  );
}

Icon.displayName = "Icon";

/** @component */
export default Icon;
