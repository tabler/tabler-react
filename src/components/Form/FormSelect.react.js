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
  +children?: React.Node,
  +className?: string,
  +valid?: boolean,
  +tick?: boolean,
  +invalid?: boolean,
  +cross?: boolean,
  +feedback?: string,
  +error?: string,
  /**
   * Wraps the select in Form.Group and adds a label
   */
  +label?: string,
  +name?: string,
  +value?: string | number,
  +disabled?: boolean,
  +readOnly?: boolean,
  +multiple?: boolean,
|};

function FormSelect(props: Props): React.Node {
  const {
    className,
    children,
    valid,
    tick,
    invalid,
    cross,
    error,
    label,
    disabled,
    readOnly,
    name,
    value,
    onChange,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onClick,
    multiple,
  } = props;
  const classes = cn(
    {
      "form-control": true,
      "custom-select": true,
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
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onClick={onClick}
        className={classes}
        disabled={disabled}
        readOnly={readOnly}
        multiple={multiple}
      >
        {children}
      </select>
      {feedback && <span className="invalid-feedback">{feedback}</span>}
    </React.Fragment>
  );

  return label ? <FormGroup label={label}>{contents}</FormGroup> : contents;
}

FormSelect.displayName = "Form.Select";

/** @component */
export default FormSelect;
