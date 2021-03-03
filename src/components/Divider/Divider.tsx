import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface DividerProps extends TablerComponentProps {}
/**
 * Divider
 */
export function Divider({ children, className, as, ...rest }: DividerProps) {
  const classes = cn("divider", className);
  const Component = as || "h6";
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Divider;
