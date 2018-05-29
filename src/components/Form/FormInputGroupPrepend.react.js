// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormInputGroupPrepend({ className, children }: Props): React.Node {
  const classes = cn("input-group-prepend", className);
  return (
    <span RootComponent="span" className={classes}>
      <span className="input-group-text">{children}</span>
    </span>
  );
}

FormInputGroupPrepend.displayName = "Form.InputGroupPrepend";

export default FormInputGroupPrepend;
