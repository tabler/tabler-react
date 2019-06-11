import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormFieldSet({ className, children }: Props) {
  const classes = cn("form-fieldset", className);
  return <fieldset className={classes}>{children}</fieldset>;
}

export default FormFieldSet;
