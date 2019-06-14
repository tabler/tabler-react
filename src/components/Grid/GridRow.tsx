import React, { HTMLAttributes } from "react";
import cn from "classnames";
import El from "../El/El";
import { UtilityProps } from "../../helpers/utilityPropsToClassNames";
import { TablerComponent } from "../../types";

export interface GridRowProps
  extends HTMLAttributes<HTMLDivElement>,
    TablerComponent,
    UtilityProps {
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
  ...props
}: GridRowProps) {
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
  return (
    <El.Div className={classes} {...props}>
      {children}
    </El.Div>
  );
}

/** @component */
export default GridRow;
