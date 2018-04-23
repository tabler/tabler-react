// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +cards?: boolean,
  +gutters?: "xs" | "sm" | "md" | "lg",
  +alignItems?: string,
|};

function GridRow({
  className,
  children,
  cards = false,
  gutters = "",
  alignItems = "",
}: Props): React.Node {
  const classes: string = cn(
    `row`,
    {
      row: true,
      "row-cards": cards,
      [`gutters-${gutters}`]: gutters,
      [`align-items-${alignItems}`]: alignItems,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default GridRow;
