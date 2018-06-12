// @flow

import * as React from "react";
import cn from "classnames";

import ListItem from "./ListItem.react";
import ListGroup from "./ListGroup.react";
import ListGroupItem from "./ListGroupItem.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +unstyled?: boolean,
  +seperated?: boolean,
  +inline?: boolean,
|};

function List({
  className,
  children,
  unstyled,
  seperated,
  inline,
}: Props): React.Node {
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
