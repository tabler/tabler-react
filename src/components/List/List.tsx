import * as React from "react";
import cn from "classnames";

import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface ListProps extends ELProps<HTMLUListElement> {
  unstyled?: boolean;
  seperated?: boolean;
  inline?: boolean;
}

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
