// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +width?: number,
  +sm?: number,
  +smAuto?: boolean,
  +md?: number,
  +mdAuto?: boolean,
  +lg?: number,
  +lgAuto?: boolean,
  +auto?: boolean,
|};

function GridCol({
  className,
  children,
  width = 0,
  sm = 0,
  md = 0,
  lg = 0,
  smAuto,
  mdAuto,
  lgAuto,
  auto,
}: Props): React.Node {
  const classes = cn(
    {
      col: true,
      [`col-${width}`]: width,
      [`col-sm-${sm}`]: sm,
      [`col-sm-auto`]: smAuto,
      [`col-md-${md}`]: md,
      [`col-md-auto`]: mdAuto,
      [`col-lg-${lg}`]: lg,
      [`col-lg-auto`]: lgAuto,
      "col-auto": auto,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default GridCol;
