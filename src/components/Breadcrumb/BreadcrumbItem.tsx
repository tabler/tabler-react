import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface BreadcrumbItemProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLLIElement> {
  /**
   * Mark this item as the active item
   */
  active?: boolean;
}

/**
 * Breadcrumb Item
 */
export function BreadcrumbItem({
  children,
  className,
  active,
  ...rest
}: BreadcrumbItemProps) {
  const classes = cn(`breadcrumb-item`, { active }, className);
  return (
    <El.Li className={classes} {...rest}>
      {children}
    </El.Li>
  );
}

export default BreadcrumbItem;
