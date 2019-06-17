import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface BreadcrumbProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLOListElement> {
  /**
   * Character to seperate the items with
   */
  separator?: "dot" | "arrow" | "slash";
}

/**
 * Breadcrumbs
 */
export function Breadcrumb({
  children,
  className,
  separator,
  ...rest
}: BreadcrumbProps) {
  const classes = cn(
    `breadcrumb`,
    { [`breadcrumb-${separator}s`]: separator && separator !== "slash" },
    className
  );
  return (
    <El.Ol className={classes} {...rest}>
      {children}
    </El.Ol>
  );
}

export default Breadcrumb;
