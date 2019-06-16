import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardFooterProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function CardFooter({ className, children, ...rest }: CardFooterProps) {
  const classes = cn("card-footer", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardFooter;
