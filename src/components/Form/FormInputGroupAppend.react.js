// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormInputGroupAppend({ className, children }: Props): React.Node {
  const classes = cn("input-group-append", className);
  return <span className={classes}>{children}</span>;
}

FormInputGroupAppend.displayName = "Form.InputGroupAppend";

export default FormInputGroupAppend;
