// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormInputGroupText({ className, children }: Props): React.Node {
  const classes = cn("input-group-text", className);
  return <span className={classes}>{children}</span>;
}

FormInputGroupText.displayName = "Form.InputGroupText";

export default FormInputGroupText;
