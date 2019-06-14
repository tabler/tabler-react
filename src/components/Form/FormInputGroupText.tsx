import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

interface FormInputGroupTextProps
  extends TablerComponent,
    HTMLAttributes<HTMLSpanElement> {}

function FormInputGroupText({
  className,
  children,
  ...rest
}: FormInputGroupTextProps) {
  const classes = cn("input-group-text", className);
  return (
    <El.Span className={classes} {...rest}>
      {children}
    </El.Span>
  );
}

export default FormInputGroupText;
