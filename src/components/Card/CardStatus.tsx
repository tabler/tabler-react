import * as React from "react";
import cn from "classnames";
import { colors } from "../../colors";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardStatusProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  color: colors;
  side?: boolean;
}

function CardStatus({
  className,
  children,
  color,
  side,
  ...rest
}: CardStatusProps) {
  const classes = cn(
    {
      "card-status": true,
      [`bg-${color}`]: true,
      [`card-status-left`]: side,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardStatus;
