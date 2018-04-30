// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +append?: boolean,
  +prepend?: boolean,
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
      "input-group": !append && !prepend,
      "input-group-append": append,
      "input-group-prepend": prepend,
    },
    className
  );
  const Component = RootComponent || "div";
  return <Component className={classes}>{children}</Component>;
}

FormInputGroup.displayName = "Form.InputGroup";

export default FormInputGroup;
