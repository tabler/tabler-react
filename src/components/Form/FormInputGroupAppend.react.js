// @flow

import * as React from "react";
import cn from "classnames";
import FormInputGroup from "./FormInputGroup.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormInputGroupAppend({ className, children }: Props): React.Node {
  const classes = cn(className);
  return (
    <FormInputGroup RootComponent="span" className={classes} append>
      <span className="input-group-text">{children}</span>
    </FormInputGroup>
  );
}

FormInputGroupAppend.displayName = "Form.InputGroupAppend";

export default FormInputGroupAppend;
