import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

/**
 * A small colored rectangle with rounded corners.
 */
function Badge({ className, children, color = "primary" }: Props) {
  const classes = cn(
    {
      badge: true,
      [`badge-${color}`]: color,
    },
    className
  );
  return <span className={classes}>{children}</span>;
}

export default Badge;
