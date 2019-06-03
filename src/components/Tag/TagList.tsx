import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * Adds a space between its child Tags
 */
function TagList(props: Props) {
  const { children, className } = props;
  const classes = cn("tags", className);
  return <div className={classes}>{children}</div>;
}

TagList.displayName = "Tag.List";

export default TagList;
