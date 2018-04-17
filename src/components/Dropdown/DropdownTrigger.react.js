// @flow
import * as React from "react";
import cn from "classnames";
import { Button } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +toggle?: boolean,
  +value?: string,
|};

function DropdownTrigger({
  className,
  toggle,
  value,
  children,
  ...rest
}: Props): React.Node {
  const classes = cn({ "dropdown-toggle": toggle }, className);
  return (
    <Button className={classes} data-toggle="dropdown" {...rest}>
      {value}
      {children}
    </Button>
  );
}

export default DropdownTrigger;
