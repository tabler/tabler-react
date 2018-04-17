// @flow

import * as React from "react";
import cn from "classnames";
import FormLabel from "./FormLabel.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +label?: React.Node,
|};

function FormGroup({ className, children, label }: Props): React.Node {
  const classes = cn("form-group", className);
  return (
    <div className={classes}>
      {!label ? null : typeof label === "string" ? (
        <FormLabel>{label}</FormLabel>
      ) : (
        label
      )}
      {children}
    </div>
  );
}

export default FormGroup;
