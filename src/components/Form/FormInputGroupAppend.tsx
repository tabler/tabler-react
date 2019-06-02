import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormInputGroupAppend({ className, children }: Props) {
  const classes = cn("input-group-append", className);
  return <span className={classes}>{children}</span>;
}

FormInputGroupAppend.displayName = "Form.InputGroupAppend";

export default FormInputGroupAppend;
