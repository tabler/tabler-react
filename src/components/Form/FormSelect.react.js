// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function FormSelect({ className, children }: Props): React.Node {
  const classes = cn(
    { "form-control": true, "custom-select": true },
    className
  );
  return <select className={classes}>{children}</select>;
}

FormSelect.displayName = "Form.Select";

export default FormSelect;
