import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface Props extends ELProps, HTMLPropsWithoutRef<HTMLSpanElement> {}

/**
 * Adds a space between its child Badges
 */
export const BadgeList = function ({ children, className, ...rest }: Props) {
  const classes = cn("Badges", className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
};

export default BadgeList;
