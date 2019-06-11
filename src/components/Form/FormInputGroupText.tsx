import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormInputGroupText({ className, children }: Props) {
  const classes = cn("input-group-text", className);
  return <span className={classes}>{children}</span>;
}



export default FormInputGroupText;
