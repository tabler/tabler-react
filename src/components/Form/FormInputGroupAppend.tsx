import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export interface FormInputGroupAppendProps
  extends TablerComponentProps<"span"> {}

function FormInputGroupAppend({
  className,
  children,
}: FormInputGroupAppendProps) {
  const classes = cn("input-group-append", className);
  return <El.Span className={classes}>{children}</El.Span>;
}

export default FormInputGroupAppend;
