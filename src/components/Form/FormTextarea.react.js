// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +className?: string |};

function FormTextarea({ className }: Props): React.Node {
  const classes = cn("form-control", className);
  return <textarea className={classes} />;
}

export default FormTextarea;
