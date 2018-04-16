// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function FormTextarea({ className, ...props }: Props): React.Node {
  const classes = cn("form-control", className);
  return <textarea className={classes} {...props} />;
}

export default FormTextarea;
