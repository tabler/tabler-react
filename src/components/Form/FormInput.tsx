import React, { InputHTMLAttributes, forwardRef } from "react";
import Icon from "../Icon";
import cn from "classnames";
import FormGroup from "./FormGroup";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface FormInputProps
  extends TablerComponent,
    InputHTMLAttributes<HTMLInputElement> {
  /**
   * Wraps the input in Form.Group and adds a label
   */
  label?: string;
  icon?: string;
  position?: "append" | "prepend";
  valid?: boolean;
  tick?: boolean;
  invalid?: boolean;
  cross?: boolean;
  feedback?: string;
  error?: string;
}

/**
 * A an input field
 */
export const FormInput = (
  {
    className,
    icon,
    position = "prepend",
    valid,
    tick,
    invalid,
    cross,
    error,
    label,
    type = "text",
    feedback,
    ...rest
  }: FormInputProps,
  ref: React.Ref<HTMLInputElement>
) => {
  const classes = cn(
    {
      "form-control": type !== "checkbox" && type !== "radio",
      "custom-control-input": type === "checkbox" || type === "radio",
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );

  const _feedback = error || feedback;

  const allInputProps = {
    className: classes,
    type,
    ...rest,
  };

  const _children = !icon ? (
    <React.Fragment>
      <El.Input ref={ref} {...allInputProps} />
      {_feedback && <span className="invalid-feedback">{_feedback}</span>}
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="input-icon">
        {position === "prepend" && (
          <span className="input-icon-addon">
            <Icon name={icon} />
          </span>
        )}
        <El.Input ref={ref} {...allInputProps} />
        {position === "append" && (
          <span className="input-icon-addon">
            <Icon name={icon} />
          </span>
        )}
      </div>
      {_feedback && <span className="invalid-feedback">{_feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{_children}</FormGroup> : _children;
};

export default forwardRef(FormInput);
