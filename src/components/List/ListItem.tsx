import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

type ListItemProps = TablerComponentProps<
  "li",
  {
    inline?: boolean;
  }
>;

function ListItem({ className, children, inline, ...rest }: ListItemProps) {
  const classes = cn({ "list-inline-item": inline }, className);
  return (
    <El.Li className={classes} {...rest}>
      {children}
    </El.Li>
  );
}

export default ListItem;
