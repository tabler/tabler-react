// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +link?: boolean,
  +prefix?: "fa" | "fe",
  +name: string,
  +isAriaHidden?: boolean
|};

function Icon({
  prefix = "fe",
  name,
  className,
  link,
  isAriaHidden
}: Props): React.Node {
  const classes = cn(
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true
    },
    className
  );
  const extraProps = isAriaHidden
    ? {
        "aria-hidden": "true"
      }
    : null;

  return !link ? (
    <i className={classes} />
  ) : (
    <a className={`icon`} {...extraProps}>
      <i className={classes} />
    </a>
  );
}

export default Icon;
