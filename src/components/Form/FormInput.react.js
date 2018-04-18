// @flow

import * as React from "react";
import { Icon } from "../";
import cn from "classnames";

type Props = {|
  +className?: string,
  +icon?: string,
  +position?: "append" | "prepend",
  +valid?: boolean,
  +tick?: boolean,
  +invalid?: boolean,
  +cross?: boolean,
  +feedback?: string,
  +type?: string,
  +placeholder?: string,
  +name?: string,
  +value?: string | number,
  +disabled?: boolean,
  +readOnly?: boolean,
|};

function FormInput({
  className,
  icon,
  position = "prepend",
  valid,
  tick,
  invalid,
  cross,
  feedback,
  type,
  placeholder,
  name,
  value,
  disabled,
  readOnly,
}: Props): React.Node {
  const classes = cn(
    "form-control",
    {
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross,
    },
    className
  );
  return !icon ? (
    <React.Fragment>
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      {feedback &&
        (invalid || cross) && (
          <span className="invalid-feedback">{feedback}</span>
        )}
    </React.Fragment>
  ) : (
    <div className="input-icon">
      {position === "prepend" && (
        <span className="input-icon-addon">
          <Icon name={icon} />
        </span>
      )}
      <input className={classes} />
      {position === "append" && (
        <span className="input-icon-addon">
          <Icon name={icon} />
        </span>
      )}
    </div>
  );
}

export default FormInput;
