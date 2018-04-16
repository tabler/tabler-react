// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +align?: "" | "left" | "center" | "right",
|};

function ButtonList({
  className,
  children,
  align = "",
  ...props
}: Props): React.Node {
  const classes = cn(
    { "btn-list": true, [`text-${align}`]: !!align },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default ButtonList;
