// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +placeholder?: string,
  +name?: string,
  +value?: string | number,
  +defaultValue?: string | number,
  +disabled?: boolean,
  +rows?: number,
|};

function FormTextarea({
  className,
  name,
  placeholder,
  defaultValue,
  value,
  disabled,
  rows,
}: Props): React.Node {
  const classes = cn("form-control", className);
  return (
    <textarea
      className={classes}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      rows={rows}
    />
  );
}

FormTextarea.displayName = "Form.Textarea";

export default FormTextarea;
