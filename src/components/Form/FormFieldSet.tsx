import React, { FieldsetHTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface FormFieldSetProps
  extends TablerComponent,
    FieldsetHTMLAttributes<HTMLFieldSetElement> {}

function FormFieldSet({ className, children, ...rest }: FormFieldSetProps) {
  const classes = cn("form-fieldset", className);
  return (
    <El.Fieldset className={classes} {...rest}>
      {children}
    </El.Fieldset>
  );
}

export default FormFieldSet;
