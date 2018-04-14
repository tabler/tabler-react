// @flow

import * as React from "react";
import cn from "classnames";

import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";

type Props = {
  +as: React.ElementType,
  +children?: React.Node,
  +className?: string,
  +size: 1 | 2 | 3 | 4 | 5
};

const Header = ({
  as: Component,
  className,
  size,
  ...props
}: Props): React.Node => {
  const classes = cn(`h${size}`, className);
  return <Component className={classes} {...props} />;
};

Header.defaultProps = {
  as: "div",
  className: "",
  size: 1
};

Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;

export default Header;
