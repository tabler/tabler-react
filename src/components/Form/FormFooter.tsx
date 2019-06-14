import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

interface FormFooterProps
  extends TablerComponent,
    HTMLAttributes<HTMLDivElement> {}

function FormFooter({ className, children, ...rest }: FormFooterProps) {
  const classes = cn("form-footer", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default FormFooter;
