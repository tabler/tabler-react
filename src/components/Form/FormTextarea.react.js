// @flow

import * as React from "react";
import cn from "classnames";
import FormGroup from "./FormGroup.react";

import type {
  FocusEvents,
  FormEvents,
  MouseEvents,
  PointerEvents,
} from "../../";

type Props = {|
  ...FocusEvents,
  ...FormEvents,
  ...MouseEvents,
  ...PointerEvents,
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
  +label?: string,
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
    onBlur,
    onFocus,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    label,
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

  const contents = (
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
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      {feedback && <span className="invalid-feedback">{feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{contents}</FormGroup> : contents;
}

FormTextarea.displayName = "Form.Textarea";

/** @component */
export default FormTextarea;
