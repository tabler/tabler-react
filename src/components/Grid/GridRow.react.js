// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  +children?: React.Node,
  +className?: string,
  +cards?: boolean,
  +gutters?: "" | "xs" | "sm" | "md" | "lg",
};

function GridRow({
  className,
  cards = false,
  gutters = "",
  ...props
}: Props): React.Node {
  const classes: string = cn(
    `row`,
    {
      row: true,
      "row-cards": cards,
      [`gutters-${gutters}`]: gutters,
    },
    className
  );
  return <div className={classes} {...props} />;
}

export default GridRow;
