// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +width?: number,
  +xs?: number,
  +xsAuto?: boolean,
  +sm?: number,
  +smAuto?: boolean,
  +md?: number,
  +mdAuto?: boolean,
  +lg?: number,
  +lgAuto?: boolean,
  +xl?: number,
  +xlAuto?: boolean,
  +auto?: boolean,
|};

function GridCol({
  className,
  children,
  width = 0,
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  xsAuto,
  smAuto,
  mdAuto,
  lgAuto,
  xlAuto,
  auto,
}: Props): React.Node {
  const classes = cn(
    {
      col: true,
      [`col-${width}`]: width,
      [`col-xs-${xs}`]: xs,
      [`col-xs-auto`]: xsAuto,
      [`col-sm-${sm}`]: sm,
      [`col-sm-auto`]: smAuto,
      [`col-md-${md}`]: md,
      [`col-md-auto`]: mdAuto,
      [`col-lg-${lg}`]: lg,
      [`col-lg-auto`]: lgAuto,
      [`col-xl-${xl}`]: xl,
      [`col-xl-auto`]: xlAuto,
      "col-auto": auto,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

GridCol.displayName = "Grid.Col";

/** @component */
export default GridCol;
