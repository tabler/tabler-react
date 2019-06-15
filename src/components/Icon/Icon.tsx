import React, { HTMLAttributes } from "react";
import cn from "classnames";

interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Should this icon be rendered within an <a> tag
   */
  link?: boolean;
  /**
   * The icon prefix
   */
  prefix?: string;
  /**
   * The icon name
   */
  name: string;
  isAriaHidden?: boolean;
  /**
   * Use the built-in payment icon set
   */
  payment?: boolean;
  /**
   * Use the built-in flag icon set
   */
  flag?: boolean;
}

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
  ...rest
}: IconProps) {
  const prefix = (payment && "payment") || (flag && "flag") || prefixFromProps;
  const classes = cn(
    "icon",
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true,
    },
    className
  );
  const extraProps = isAriaHidden
    ? {
        "aria-hidden": true,
      }
    : null;

  return !link ? (
    <i className={classes} {...rest} />
  ) : (
    <a className="icon" {...extraProps} {...rest}>
      <i className={classes} />
    </a>
  );
}

/** @component */
export default Icon;
