import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

interface FormFooterProps extends TablerComponentProps {}

function FormFooter({ className, children, ...rest }: FormFooterProps) {
  const classes = cn("form-footer", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default FormFooter;
