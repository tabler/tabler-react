// @flow

import * as React from "react";
import cn from "classnames";
import FormInputGroupAppend from "./FormInputGroupAppend.react";
import FormInputGroupPrepend from "./FormInputGroupPrepend.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +input?: React.Node,
  +append?: React.Node,
  +prepend?: React.Node,
  +RootComponent?: React.ElementType,
|};

function FormInputGroup({
  className,
  children,
  append,
  prepend,
  RootComponent,
}: Props): React.Node {
  const classes = cn(
    {
      "input-group": true,
    },
    className
  );
  const Component = RootComponent || "div";
  return (
    <Component className={classes}>
      {prepend && <FormInputGroupPrepend>{prepend}</FormInputGroupPrepend>}
      {children}
      {append && <FormInputGroupAppend>{append}</FormInputGroupAppend>}
    </Component>
  );
}

FormInputGroup.displayName = "Form.InputGroup";

export default FormInputGroup;
