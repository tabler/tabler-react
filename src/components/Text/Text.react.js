// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +color: string,
  +size: string,
  +wrap?: boolean,
|};

const Text = ({
  className,
  RootComponent,
  color = "",
  size = "",
  wrap,
  ...props
}: Props): React.Node => {
  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
    },
    className
  );
  const Component = RootComponent || "div";
  return <Component className={classes} {...props} />;
};

export default Text;
