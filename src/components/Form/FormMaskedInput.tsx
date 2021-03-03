import * as React from "react";
import cn from "classnames";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import getUtilityPropsClasses from "../../helpers/utilityPropsToClassNames";

interface Props extends MaskedInputProps {
  valid?: boolean;
  tick?: boolean;
  invalid?: boolean;
  cross?: boolean;
  feedback?: string;
}

/**
 * A masked input field using react-text-mask
 */
function FormMaskedInput({
  valid,
  tick,
  invalid,
  cross,
  feedback,
  className,
  ...rest
}: Props) {
  const utilityClasses = getUtilityPropsClasses(rest);
  const classes = cn(
    utilityClasses,
    {
      "form-control": true,
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross,
    },
    className
  );

  return (
    <React.Fragment>
      <MaskedInput className={classes} {...rest} />
      {feedback && (invalid || cross) && (
        <span className="invalid-feedback">{feedback}</span>
      )}
    </React.Fragment>
  );
}

export default FormMaskedInput;
