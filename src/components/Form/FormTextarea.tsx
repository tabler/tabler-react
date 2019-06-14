import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";
import FormGroup from "./FormGroup";

import El from "../El/El";

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  valid?: boolean;
  tick?: boolean;
  invalid?: boolean;
  cross?: boolean;
  feedback?: string;
  error?: string;
  children?: string;
  label?: string;
}

function FormTextarea({
  className,
  valid,
  tick,
  invalid,
  cross,
  error,
  value,
  children,
  label,
  feedback,
  ...rest
}: FormTextareaProps) {
  const classes = cn(
    "form-control",
    {
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );
  const _feedback = error || feedback;

  const contents = (
    <React.Fragment>
      <El.Textarea className={classes} children={value || children} {...rest} />
      {_feedback && <span className="invalid-feedback">{_feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{contents}</FormGroup> : contents;
}

/** @component */
export default FormTextarea;
