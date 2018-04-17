// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +append?: boolean,
  +RootComponent?: React.ElementType,
|};

function FormInputGroup({
  className,
  children,
  append,
  RootComponent,
  ...props
}: Props): React.Node {
  const classes = cn(
    { "input-group": !append, "input-group-append": append },
    className
  );
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default FormInputGroup;
