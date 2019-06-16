import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

interface ListItemProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLLIElement> {
  inline?: boolean;
}

function ListItem({ className, children, inline, ...rest }: ListItemProps) {
  const classes = cn({ "list-inline-item": inline }, className);
  return (
    <El.Li className={classes} {...rest}>
      {children}
    </El.Li>
  );
}

export default ListItem;
