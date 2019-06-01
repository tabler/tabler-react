import * as React from "react";
import cn from "classnames";
import { Icon } from "..";

interface Props {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  type?: "collapse" | "close" | "fullscreen";
  onClick?: () => any;
}

function CardOptionsItem({ className, children, icon, type, onClick }: Props) {
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
    <a className={classes} data-toggle={dataToggle} onClick={onClick}>
      <Icon name={iconName} />
    </a>
  );
}

CardOptionsItem.displayName = "Card.OptionsItem";

export default CardOptionsItem;
