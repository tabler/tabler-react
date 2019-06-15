import * as React from "react";
import cn from "classnames";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface CardBodyProps extends ELProps<HTMLDivElement> {}

function CardBody({ className, children, ...rest }: CardBodyProps) {
  const _className = cn("card-body", className);
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardBody;
