import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

interface FormInputGroupTextProps extends TablerComponentProps<"span", {}> {}

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
