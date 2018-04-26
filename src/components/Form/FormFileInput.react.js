// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +value?: string | number | boolean,
  +name?: string,
  +label?: string,
  +disabled?: boolean,
  +readOnly?: boolean,
  +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
|};

function FormFileInput({
  className,
  value,
  name,
  label = "Choose file",
  disabled,
  readOnly,
  onChange,
}: Props): React.Node {
  const classes = cn("custom-file", className);
  return (
    <div className={classes}>
      <input
        type="file"
        className="custom-file-input"
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
      />
      <label class="custom-file-label">{label}</label>
    </div>
  );
}

FormFileInput.displayName = "Form.FileInput";

export default FormFileInput;
