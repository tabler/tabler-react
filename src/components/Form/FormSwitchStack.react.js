// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function FormToggleStack({ className, children }: Props): React.Node {
  const classes = cn("custom-switches-stacked", className);
  return <div className={classes}>{children}</div>;
}

FormToggleStack.displayName = "Form.ToggleStack";

export default FormToggleStack;
