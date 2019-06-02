import * as React from "react";
import cn from "classnames";
import List from "../List";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CommentList({ className, children }: Props) {
  const classes = cn("card-list-group", className);
  return <List.Group className={classes}>{children}</List.Group>;
}

export default CommentList;
