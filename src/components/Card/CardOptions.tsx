import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface CardOptionsProps extends ELProps<HTMLDivElement> {}

function CardOptions({ className, children, ...rest }: CardOptionsProps) {
  const classes = cn("card-options", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardOptions;
