import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardBodyProps
  extends TablerComponentProps,
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
