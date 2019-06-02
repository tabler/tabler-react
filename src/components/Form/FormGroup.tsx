import * as React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import { Props as InputProps } from "./FormInput";

interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  isRequired?: boolean;
  inputProps?: InputProps;
}

function FormGroup({
  className,
  children,
  label,
  isRequired,
  inputProps,
}: Props) {
  const classes = cn("form-group", className);
  const inputComponent =
    inputProps && React.createElement(FormInput, inputProps);
  return (
    <div className={classes}>
      {!label ? null : typeof label === "string" ? (
        <FormLabel>
          {label}
          {isRequired && <span className="form-required">*</span>}
        </FormLabel>
      ) : (
        label
      )}
      {inputComponent || children}
    </div>
  );
}

FormGroup.displayName = "Form.Group";

export default FormGroup;
