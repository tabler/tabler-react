import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardAlertProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  color: colors;
}

function CardAlert({ className, children, color, ...rest }: CardAlertProps) {
  const classes = cn(`card-alert alert alert-${color} mb-0`, className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardAlert;
