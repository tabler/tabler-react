// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +name?: string,
  +label?: string | number,
  +value?: string | number,
  +checked?: boolean,
  +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  +type?: "checkbox" | "radio",
|};

function FormToggle({
  className,
  type = "checkbox",
  name,
  value,
  label,
  onChange,
  checked,
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
      />
      <span className="custom-switch-indicator" />
      <span className="custom-switch-description">{label}</span>
    </label>
  );
}

FormToggle.displayName = "Form.Toggle";

export default FormToggle;
