import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardOptionsProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function CardOptions({ className, children, ...rest }: CardOptionsProps) {
  const classes = cn("card-options", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardOptions;
