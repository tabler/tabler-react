// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
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

  return !link ? (
    <i className={classes} />
  ) : (
    <a className="icon" {...extraProps}>
      <i className={classes} />
    </a>
  );
}

Icon.displayName = "Icon";

/** @component */
export default Icon;
