import * as React from "react";
import cn from "classnames";

import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";

interface Props {
  children?: React.ReactNode;
  className?: string;
  unstyled?: boolean;
  seperated?: boolean;
  inline?: boolean;
}

function List({ className, children, unstyled, seperated, inline }: Props) {
  const classes = cn(
    {
      list: !unstyled,
      "list-unstyled": unstyled,
      "list-seperated": seperated,
      "list-inline": inline,
    },
    className
  );
  return <ul className={classes}>{children}</ul>;
}

List.Item = ListItem;
List.Group = ListGroup;
List.GroupItem = ListGroupItem;

export default List;
