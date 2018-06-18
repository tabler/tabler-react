// @flow

import * as React from "react";
import cn from "classnames";

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
  +name?: string,
  +label?: string | number,
  +value?: string | number,
  +checked?: boolean,
  +type?: "checkbox" | "radio",
|};

function FormToggle({
  className,
  type = "checkbox",
  name,
  value,
  label,
  checked,
  onChange,
  onBlur,
  onFocus,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props): React.Node {
  const classes = cn("custom-switch", className);
  return (
    <label className={classes}>
      <input
        type={type}
        name={name}
        value={value}
        className="custom-switch-input"
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <span className="custom-switch-indicator" />
      <span className="custom-switch-description">{label}</span>
    </label>
  );
}

FormToggle.displayName = "Form.Toggle";

export default FormToggle;
