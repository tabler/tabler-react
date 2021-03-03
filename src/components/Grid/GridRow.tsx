import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface GridRowProps
  extends TablerComponentProps<
    "div",
    {
      cards?: boolean;
      deck?: boolean;
      gutters?: "xs" | "sm" | "md" | "lg";
      alignItems?: string;
      justifyContent?: string;
    }
  > {}

function GridRow({
  className,
  children,
  cards,
  deck,
  gutters,
  alignItems = "",
  justifyContent = "",
  ...props
}: GridRowProps) {
  const classes: string = cn(
    `row`,
    {
      "row-cards": cards,
      "row-deck": deck,
      [`gutters-${gutters}`]: gutters,
      [`align-items-${alignItems}`]: alignItems,
      [`justify-content-${justifyContent}`]: justifyContent,
    },
    className
  );
  return (
    <El.Div className={classes} {...props}>
      {children}
    </El.Div>
  );
}

/** @component */
export default GridRow;
