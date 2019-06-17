import React, { ReactElement, ElementType } from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface DividerProps<T extends HTMLElement = HTMLHeadingElement>
  extends ELProps,
    Omit<HTMLPropsWithoutRef<T>, "as"> {
  as?: ElementType;
}

/**
 * Divider
 */
export function Divider<T extends HTMLElement = HTMLHeadingElement>({
  children,
  className,
  as: Component = "h6",
  ...rest
}: DividerProps<T>) {
  const classes = cn("divider", className);
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Divider;
