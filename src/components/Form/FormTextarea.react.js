// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +valid?: boolean,
  +tick?: boolean,
  +invalid?: boolean,
  +cross?: boolean,
  +feedback?: string,
  +error?: string,
  +placeholder?: string,
  +name?: string,
  +value?: string | number,
  +defaultValue?: string | number,
  +disabled?: boolean,
  +rows?: number,
  +children?: string,
  +onChange?: (event: SyntheticInputEvent<HTMLTextAreaElement>) => void,
  +onBlur?: (event: SyntheticInputEvent<HTMLTextAreaElement>) => void,
|};

function FormTextarea(props: Props): React.Node {
  const {
    className,
    name,
    valid,
    tick,
    invalid,
    cross,
    error,
    placeholder,
    defaultValue,
    value,
    disabled,
    rows,
    children,
    onChange,
  } = props;
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
  const feedback = error || props.feedback;

  return (
    <React.Fragment>
      <textarea
        className={classes}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value || children}
        disabled={disabled}
        rows={rows}
        onChange={onChange}
      />
      {feedback && <span className="invalid-feedback">{feedback}</span>}
    </React.Fragment>
  );
}

FormTextarea.displayName = "Form.Textarea";

export default FormTextarea;
