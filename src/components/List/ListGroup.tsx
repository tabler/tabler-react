import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface ListGroupProps extends ELProps<HTMLDivElement> {
  transparent?: boolean;
  isCardBody?: boolean;
}

function ListGroup({
  className,
  children,
  transparent,
  isCardBody,
  ...rest
}: ListGroupProps) {
  const classes = cn(
    "list-group",
    "mb-0",
    {
      "list-group-transparent": transparent,
      "card-list-group": isCardBody,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default ListGroup;
