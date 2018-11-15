// @flow

import * as React from "react";
import cn from "classnames";
import List from "../List";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CommentList({ className, children }: Props): React.Node {
  const classes = cn("card-list-group", className);
  return <List.Group className={classes}>{children}</List.Group>;
}

export default CommentList;
