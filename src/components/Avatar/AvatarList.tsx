import * as React from "react";
import cn from "classnames";

export interface AvatarListProps {
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
export function AvatarList({ className, children, stacked }: AvatarListProps) {
  const classes = cn(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default AvatarList;
