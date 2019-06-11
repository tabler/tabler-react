import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  cards?: boolean;
  deck?: boolean;
  gutters?: "xs" | "sm" | "md" | "lg";
  alignItems?: string;
  justifyContent?: string;
}

function GridRow({
  className,
  children,
  cards,
  deck,
  gutters,
  alignItems = "",
  justifyContent = "",
}: Props) {
  const classes: string = cn(
    `row`,
    {
      row: true,
      "row-cards": cards,
      "row-deck": deck,
      [`gutters-${gutters}`]: gutters,
      [`align-items-${alignItems}`]: alignItems,
      [`justify-content-${justifyContent}`]: justifyContent,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}



/** @component */
export default GridRow;
