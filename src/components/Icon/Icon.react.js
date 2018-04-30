// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +link?: boolean,
  +prefix?: "fa" | "fe",
  +name: string,
  +isAriaHidden?: boolean,
  +payment?: boolean,
|};

function Icon({
  prefix: prefixFromProps = "fe",
  name,
  className,
  link,
  isAriaHidden,
  payment,
}: Props): React.Node {
  const prefix = payment ? "payment" : prefixFromProps;
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

export default Icon;
