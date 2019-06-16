import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface CardOptionsItemProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLAnchorElement> {
  icon?: string;
  type?: "collapse" | "close" | "fullscreen";
}

function CardOptionsItem({
  className,
  children,
  icon,
  type,
  ...rest
}: CardOptionsItemProps) {
  const classes = cn(
    {
      "card-options-collapse": type === "collapse",
      "card-options-remove": type === "close",
      "card-options-fullscreen": type === "fullscreen",
    },
    className
  );

  const dataToggle = ((): string => {
    switch (type) {
      case "collapse":
        return "card-collapse";
      case "close":
        return "card-remove";
      case "fullscreen":
        return "card-remove";
      default:
        return "";
    }
  })();

  const iconName = ((): string => {
    if (icon) {
      return icon;
    }
    switch (type) {
      case "collapse":
        return "chevron-up";
      case "close":
        return "x";
      case "fullscreen":
        return "maximize";
      default:
        return "";
    }
  })();

  return (
    <El.A className={classes} data-toggle={dataToggle} {...rest}>
      <Icon name={iconName} />
    </El.A>
  );
}

export default CardOptionsItem;
