import React from "react";
import cn from "classnames";
import FormInput, { FormInputProps } from "./FormInput";

export interface FormRadioProps extends FormInputProps {
  /**
   * Wrap the checkbox with a label
   */
  label?: string;
  isInline?: boolean;
}

function FormRadio({ className, label, isInline, ...rest }: FormRadioProps) {
  const classes = cn(
    "custom-control custom-radio",
    { "custom-control-inline": isInline },
    className
  );

  const inputComponent = (
    <FormInput type="radio" className={classes} {...rest} />
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

export default FormRadio;
