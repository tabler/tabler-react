// @flow

import * as React from "react";
import cn from "classnames";
import FormInputGroup from "./FormInputGroup.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function FormInputGroupPrepend({ className, children }: Props): React.Node {
  const classes = cn(className);
  return (
    <FormInputGroup RootComponent="span" className={classes} prepend>
      <span className="input-group-text">{children}</span>
    </FormInputGroup>
  );
}

FormInputGroupPrepend.displayName = "Form.InputGroupPrepend";

export default FormInputGroupPrepend;
