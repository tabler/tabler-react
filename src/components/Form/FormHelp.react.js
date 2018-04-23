// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: "top" | "bottom",
  +message?: React.Node,
|};

function FormHelp({
  className,
  children,
  position = "top",
  message,
}: Props): React.Node {
  const classes = cn("form-help", className);
  return (
    <span
      className={classes}
      dataContent={message}
      dataToggle="popover"
      dataPlacement={position}
    >
      {children || "?"}
    </span>
  );
}

FormHelp.displayName = "Form.Help";

export default FormHelp;
