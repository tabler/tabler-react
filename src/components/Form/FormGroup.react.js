// @flow

import * as React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +label?: React.Node,
  +isRequired?: boolean,
|};

function FormGroup({
  className,
  children,
  label,
  isRequired,
}: Props): React.Node {
  const classes = cn("form-group", className);
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
      {children}
    </div>
  );
}

FormGroup.displayName = "Form.Group";

export default FormGroup;
