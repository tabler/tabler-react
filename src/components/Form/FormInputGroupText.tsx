import React from "react";
import cn from "classnames";
import { TablerComponent, HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";

interface FormInputGroupTextProps
  extends TablerComponent,
    HTMLPropsWithoutRef<HTMLSpanElement> {}

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
