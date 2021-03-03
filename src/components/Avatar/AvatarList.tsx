import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";
import { HTMLPropsWithoutRef } from "../../types";

export interface AvatarListProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  /**
   * Renders the Avatars to look stacked by slightly overlapping each over
   */
  stacked?: boolean;
}

/**
 * Renders a group of Icons
 */
export function AvatarList({
  className,
  children,
  stacked,
  ...rest
}: AvatarListProps) {
  const classes = cn(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default AvatarList;
