import * as React from "react";
import cn from "classnames";
import FormInput from "./FormInput";

import {
  MouseEvents,
  PointerEvents,
  FormEvents,
  FocusEvents,
} from "../../types";

interface Props extends MouseEvents, PointerEvents, FormEvents, FocusEvents {
  className?: string;
  /**
   * Wrap the checkbox with a label
   */
  label?: string;
  value?: string | number;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isInline?: boolean;
}

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
}: Props) {
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
    <FormInput
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



export default FormRadio;
