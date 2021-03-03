import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardFooterProps
  extends TablerComponentProps,
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
