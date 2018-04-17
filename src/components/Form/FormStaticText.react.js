// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function FormStaticText({ className, children }: Props): React.Node {
  const classes = cn("form-control-plaintext", className);
  return <div className={classes}>{children}</div>;
}

export default FormStaticText;
