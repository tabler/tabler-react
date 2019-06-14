import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

export interface FormToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number;
  type?: "checkbox" | "radio";
}

function FormToggle({
  className,
  type = "checkbox",
  label,
  ...rest
}: FormToggleProps) {
  const classes = cn("custom-switch", className);
  return (
    <label className={classes}>
      <input className="custom-switch-input" type={type} {...rest} />
      <span className="custom-switch-indicator" />
      <span className="custom-switch-description">{label}</span>
    </label>
  );
}

export default FormToggle;
