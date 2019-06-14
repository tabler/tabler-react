import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";
import { UtilityProps } from "../../helpers/utilityPropsToClassNames";

export interface Props extends TablerComponent, UtilityProps {}

function CardBody({ className, children, ...rest }: Props) {
  const _className = cn("card-body", className);
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
}

export default CardBody;
