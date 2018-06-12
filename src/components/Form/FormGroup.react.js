// @flow

import * as React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel.react";
import FormInput from "./FormInput.react";
import type { Props as InputProps } from "./FormInput.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +label?: React.Node,
  +isRequired?: boolean,
  +inputProps?: InputProps,
|};

function FormGroup({
  className,
  children,
  label,
  isRequired,
  inputProps,
}: Props): React.Node {
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
