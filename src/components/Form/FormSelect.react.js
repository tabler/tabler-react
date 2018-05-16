// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +onChange?: (SyntheticInputEvent<EventTarget>) => mixed,
|};

function FormSelect({ className, children, onChange }: Props): React.Node {
  const classes = cn(
    { "form-control": true, "custom-select": true },
    className
  );
  return (
    <select onChange={onChange} className={classes}>
      {children}
    </select>
  );
}

FormSelect.displayName = "Form.Select";

export default FormSelect;
