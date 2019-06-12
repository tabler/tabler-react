import React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";

export interface Props extends TablerComponent {}

/**
 * Adds a space between its child Badges
 */
export const BadgeList = function({ children, className, ...rest }: Props) {
  const classes = cn("Badges", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default BadgeList;
