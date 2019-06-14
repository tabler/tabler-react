import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface FormInputGroupAppendProps
  extends TablerComponent,
    HTMLAttributes<HTMLSpanElement> {}

function FormInputGroupAppend({
  className,
  children,
}: FormInputGroupAppendProps) {
  const classes = cn("input-group-append", className);
  return <El.Span className={classes}>{children}</El.Span>;
}

export default FormInputGroupAppend;
