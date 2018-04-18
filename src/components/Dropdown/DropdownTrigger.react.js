// @flow

import * as React from "react";
import cn from "classnames";
import { Button } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +toggle?: boolean,
  +value?: string,
  +RootComponent?: React.ElementType,
  +icon?: string,
|};
// I cant pass in props for RootComponent so if I want to pass an icon down to a Button used as the Component I again have to
// specify it in these props, provide logic to determine whether or not to add the prop etc

function DropdownTrigger({
  className,
  toggle,
  value,
  children,
  RootComponent,
  icon,
}: Props): React.Node {
  const classes = cn({ "dropdown-toggle": toggle }, className);
  const Component = RootComponent || Button;
  return (
    <Component className={classes} dataToggle="dropdown" icon={icon}>
      {value}
      {children}
    </Component>
  );
}

export default DropdownTrigger;
