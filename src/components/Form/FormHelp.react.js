// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function FormHelp({ className, children, ...props }: Props): React.Node {
  const classes = cn("form-help", className);
  return (
    <span className={classes} {...props}>
      {children || "?"}
    </span>
  );
}

export default FormHelp;
