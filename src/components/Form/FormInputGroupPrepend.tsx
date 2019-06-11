import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormInputGroupPrepend({ className, children }: Props) {
  const classes = cn("input-group-prepend", className);
  return <span className={classes}>{children}</span>;
}

export default FormInputGroupPrepend;
