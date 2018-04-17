// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +cards?: boolean,
  +gutters?: "xs" | "sm" | "md" | "lg"
|};

function GridRow({
  className,
  children,
  cards = false,
  gutters = ""
}: Props): React.Node {
  const classes: string = cn(
    `row`,
    {
      row: true,
      "row-cards": cards,
      [`gutters-${gutters}`]: gutters
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default GridRow;
