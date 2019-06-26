import React from "react";
import cn from "classnames";
import FormGroup from "./FormGroup";

import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface FormTextareaProps
  extends HTMLPropsWithoutRef<HTMLTextAreaElement> {
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

  if (children) {
    rest.value = children;
  }

  const contents = (
    <React.Fragment>
      <El.Textarea className={classes} {...rest} />
      {_feedback && <span className="invalid-feedback">{_feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{contents}</FormGroup> : contents;
}

/** @component */
export default FormTextarea;
