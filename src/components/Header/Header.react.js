// @flow

import * as React from "react";
import cn from "classnames";

import H1 from "./H1.react";
import H2 from "./H2.react";
import H3 from "./H3.react";
import H4 from "./H4.react";
import H5 from "./H5.react";

type Props = {
  +RootComponent?: React.ElementType,
  +children?: React.Node,
  +className?: string,
  +size: 1 | 2 | 3 | 4 | 5,
};

function Header({
  RootComponent,
  className,
  children,
  size = 1,
  ...props
}: Props): React.Node {
  const classes = cn(`h${size}`, className);
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;

export default Header;
