import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface BreadcrumbItemProps extends TablerComponentProps<"li"> {
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
