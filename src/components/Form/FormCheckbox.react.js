// @flow

import * as React from "react";
import cn from "classnames";
import Form from "./";

type Props = {|
  +className?: string,
  +label?: string,
  +value?: string | number | boolean,
  +name?: string,
  +checked?: boolean,
  +disabled?: boolean,
  +readOnly?: boolean,
  +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
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
}: Props): React.Node {
  const classes = cn(className);
  return (
    <label className="custom-control custom-checkbox">
      <Form.Input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className={classes}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
      />
      <span className="custom-control-label">{label}</span>
    </label>
  );
}

FormCheckbox.displayName = "Form.Checkbox";

export default FormCheckbox;
