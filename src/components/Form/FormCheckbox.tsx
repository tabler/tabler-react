import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import FormInput from "./FormInput";

import { TablerComponent } from "../../types";

export interface Props
  extends TablerComponent,
    InputHTMLAttributes<HTMLInputElement> {
  /**
   * Wrap the checkbox with a label
   */
  label?: string;
  isInline?: boolean;
}

function FormCheckbox({ className, label, isInline, ...rest }: Props) {
  const classes = cn(
    "custom-control custom-checkbox",
    { "custom-control-inline": isInline },
    className
  );
  const inputComponent = (
    <FormInput type="checkbox" className={classes} {...rest} />
  );

  return label ? (
    <label className={classes}>
      {inputComponent}
      <span className="custom-control-label">{label}</span>
    </label>
  ) : (
    inputComponent
  );
}

/** @component */
export default FormCheckbox;
