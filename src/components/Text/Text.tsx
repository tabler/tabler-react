import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import { colors } from "../../colors";
import El from "../El/El";

export type TextProps<
  As extends React.ElementType = "p"
> = TablerComponentProps<
  As,
  {
    /*
     * @deprecated use 'as'
     */
    RootComponent?: React.ElementType;
    color?: colors;
    size?: string;
    wrap?: boolean;
    muted?: boolean;
  }
>;

const Text = function <As extends React.ElementType = "p">({
  className,
  children,
  RootComponent,
  as,
  color,
  size = "",
  wrap,
  ...rest
}: TextProps<As>) {
  const Component = RootComponent || as || El.P;

  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
    },
    className
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

/** @component */
export default Text;
