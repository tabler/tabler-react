// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +cards?: boolean,
  +deck?: boolean,
  +gutters?: "xs" | "sm" | "md" | "lg",
  +alignItems?: string,
|};

function GridRow({
  className,
  children,
  cards,
  deck,
  gutters = "",
  alignItems = "",
}: Props): React.Node {
  const classes: string = cn(
    `row`,
    {
      row: true,
      "row-cards": cards,
      "row-deck": deck,
      [`gutters-${gutters}`]: gutters,
      [`align-items-${alignItems}`]: alignItems,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

GridRow.displayName = "Grid.Row";

/** @component */
export default GridRow;
