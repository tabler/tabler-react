// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +link?: boolean,
  +prefix?: "fa" | "fe",
  +name: string
|};

function Icon({
  prefix = "fe",
  name,
  className,
  link,
  ...rest
}: Props): React.Node {
  const classes = cn(
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true
    },
    className
  );
  return !link ? (
    <i className={classes} />
  ) : (
    <a className={`icon`} {...rest}>
      <i className={classes} />
    </a>
  );
}

export default Icon;
