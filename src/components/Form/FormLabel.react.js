// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string, +aside?: string |};

function FormLabel({
  className,
  aside,
  children,
  ...props
}: Props): React.Node {
  const classes = cn("form-label", className);
  return (
    <label className={classes} {...props}>
      {aside && <span className="form-label-small">{aside}</span>}
      {children}
    </label>
  );
}

export default FormLabel;
