// @flow

import * as React from "react";
import cn from "classnames";
import Form from "./";

import type {
  MouseEvents,
  PointerEvents,
  FormEvents,
  FocusEvents,
} from "../../";

type Props = {|
  ...MouseEvents,
  ...PointerEvents,
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

function FormRadio({
  className,
  label,
  value,
  name,
  checked,
  disabled,
  readOnly,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
  onBlur,
  onFocus,
  onClick,
  isInline,
}: Props): React.Node {
  const classes = cn(
    "custom-control custom-radio",
    { "custom-control-inline": isInline },
    className
  );

  const events = {
    onChange: onChange,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    onBlur: onBlur,
    onFocus: onFocus,
    onClick: onClick,
  };

  const inputComponent = (
    <Form.Input
      {...events}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
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

FormRadio.displayName = "Form.Radio";

export default FormRadio;
