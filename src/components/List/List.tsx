import * as React from "react";
import cn from "classnames";

import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type ListProps = TablerComponentProps<
  "ul",
  {
    unstyled?: boolean;
    seperated?: boolean;
    inline?: boolean;
  }
>;

function List({
  className,
  children,
  unstyled,
  seperated,
  inline,
  ...rest
}: ListProps) {
  const classes = cn(
    {
      list: !unstyled,
      "list-unstyled": unstyled,
      "list-seperated": seperated,
      "list-inline": inline,
    },
    className
  );
  return (
    <El.Ul className={classes} {...rest}>
      {children}
    </El.Ul>
  );
}

List.Item = ListItem;
List.Group = ListGroup;
List.GroupItem = ListGroupItem;

export default List;
