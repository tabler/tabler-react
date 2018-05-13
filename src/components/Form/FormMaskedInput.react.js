// @flow
import * as React from "react";
import cn from "classnames";
import MaskedInput from "react-text-mask";

type Props = {|
  +mask: Array<string>,
  +className?: string,
  +placeholder?: string,
  +guide?: boolean,
  +id?: string,
  +onBlur?: () => {},
  +onChange?: () => {},
  +valid?: boolean,
  +tick?: boolean,
  +invalid?: boolean,
  +cross?: boolean,
  +feedback?: string,
|};

function FormMaskedInput(props: Props): React.Node {
  const { valid, tick, invalid, cross, feedback } = props;
  const classes = cn(
    {
      "form-control": true,
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross,
    },
    props.className
  );
  return (
    <React.Fragment>
      <MaskedInput className={classes} {...props} />
      {feedback &&
        (invalid || cross) && (
          <span className="invalid-feedback">{feedback}</span>
        )}
    </React.Fragment>
  );
}

FormMaskedInput.displatName = "Form.MaskedInput";

export default FormMaskedInput;
