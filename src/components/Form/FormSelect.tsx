import React, { SelectHTMLAttributes } from "react";
import cn from "classnames";
import FormGroup from "./FormGroup";

import El from "../El/El";

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  valid?: boolean;
  tick?: boolean;
  invalid?: boolean;
  cross?: boolean;
  feedback?: string;
  error?: string;
  /**
   * Wraps the select in Form.Group and adds a label
   */
  label?: string;
}

function FormSelect({
  className,
  children,
  valid,
  tick,
  invalid,
  cross,
  error,
  label,
  feedback,
  ...rest
}: FormSelectProps) {
  const classes = cn(
    {
      "form-control": true,
      "custom-select": true,
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );

  const _feedback = error || feedback;

  const _children = (
    <React.Fragment>
      <El.Select className={classes} {...rest}>
        {children}
      </El.Select>
      {_feedback && <span className="invalid-feedback">{_feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{_children}</FormGroup> : _children;
}

/** @component */
export default FormSelect;
