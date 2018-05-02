// @flow

import * as React from "react";
import cn from "classnames";
import TextSmall from "./TextSmall.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +color?: string,
  +size?: string,
  +wrap?: boolean,
  +muted?: boolean,
  +align?: "left" | "center" | "right" | "justify",
  +left?: boolean,
  +center?: boolean,
  +right?: boolean,
  +justify?: boolean,
|};

const Text = ({
  className,
  children,
  RootComponent,
  color = "",
  size = "",
  wrap,
  muted,
  align: alignFromProps = "",
  left,
  center,
  right,
  justify,
  ...props
}: Props): React.Node => {
  const align =
    alignFromProps ||
    (left && "left") ||
    (center && "center") ||
    (right && "right") ||
    (justify && "justify");
  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
      "text-muted": muted,
      [`text-${align}`]: align,
    },
    className
  );
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

Text.Small = TextSmall;

export default Text;
