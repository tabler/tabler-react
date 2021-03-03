import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormInputGroupPrependProps
  extends TablerComponentProps<"span"> {}

function FormInputGroupPrepend({
  className,
  children,
  ...rest
}: FormInputGroupPrependProps) {
  const classes = cn("input-group-prepend", className);
  return (
    <El.Span className={classes} {...rest}>
      {children}
    </El.Span>
  );
}

export default FormInputGroupPrepend;
