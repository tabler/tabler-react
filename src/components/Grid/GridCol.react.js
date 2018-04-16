// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +width?: number,
  +sm?: number,
  +md?: number,
  +lg?: number,
  +auto?: boolean
|};

function GridCol({
  className,
  children,
  width = 0,
  sm = 0,
  md = 0,
  lg = 0,
  auto,
  ...props
}: Props): React.Node {
  const classes = cn(
    {
      col: true,
      [`col-${width}`]: width,
      [`col-sm-${sm}`]: sm,
      [`col-md-${md}`]: md,
      [`col-lg-${lg}`]: lg,
      "col-auto": auto
    },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default GridCol;
