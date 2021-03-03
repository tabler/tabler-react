import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormFieldSetProps extends TablerComponentProps<"fieldset"> {}

function FormFieldSet({ className, children, ...rest }: FormFieldSetProps) {
  const classes = cn("form-fieldset", className);
  return (
    <El.Fieldset className={classes} {...rest}>
      {children}
    </El.Fieldset>
  );
}

export default FormFieldSet;
