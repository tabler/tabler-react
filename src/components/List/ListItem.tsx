import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
}

function ListItem({ className, children, inline }: Props) {
  const classes = cn({ "list-inline-item": inline }, className);
  return <li className={classes}>{children}</li>;
}

ListItem.displayName = "List.Item";

export default ListItem;
