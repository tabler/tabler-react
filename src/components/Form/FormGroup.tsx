import * as React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel";

interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  isRequired?: boolean;
  /**
   * @deprecated
   */
  inputProps?: any;
}

function FormGroup({ className, children, label, isRequired }: Props) {
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



export default FormGroup;
