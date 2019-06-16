import React from "react";
import cn from "classnames";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardBodyProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function CardBody({ className, children, ...rest }: CardBodyProps) {
  const _className = cn("card-body", className);
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardBody;
