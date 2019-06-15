import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface CardFooterProps extends ELProps<HTMLDivElement> {}

function CardFooter({ className, children, ...rest }: CardFooterProps) {
  const classes = cn("card-footer", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardFooter;
