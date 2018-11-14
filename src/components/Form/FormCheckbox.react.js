// @flow

import * as React from "react";
import cn from "classnames";
import Form from "./";

import type { FormEvents, FocusEvents } from "../../";

export type Props = {|
  ...FormEvents,
  ...FocusEvents,
  +className?: string,
  /**
   * Wrap the checkbox with a label
   */
  +label?: string,
  +value?: string | number | boolean,
  +name?: string,
  +checked?: boolean,
  +disabled?: boolean,
  +readOnly?: boolean,
  +isInline?: boolean,
|};

function FormCheckbox({
  className,
  label,
  value,
  name,
  checked,
  disabled,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  isInline,
}: Props): React.Node {
  const classes = cn(
    "custom-control custom-checkbox",
    { "custom-control-inline": isInline },
    className
  );
  const inputComponent = (
    <Form.Input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );

  return label ? (
    <label className={classes}>
      {inputComponent}
      <span className="custom-control-label">{label}</span>
    </label>
  ) : (
    inputComponent
  );
}

FormCheckbox.displayName = "Form.Checkbox";

/** @component */
export default FormCheckbox;
