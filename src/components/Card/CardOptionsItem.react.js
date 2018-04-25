// @flow

import * as React from "react";
import cn from "classnames";
import { Icon } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +icon?: string,
  +type?: "collapse" | "close",
  +onClick?: () => mixed,
|};

function CardOptionsItem({
  className,
  children,
  icon,
  type,
  onClick,
}: Props): React.Node {
  const classes = cn(
    {
      "card-options-collapse": type === "collapse",
      "card-options-remove": type === "close",
    },
    className
  );

  const dataToggle = ((): string => {
    switch (type) {
      case "collapse":
        return "card-collapse";
      case "close":
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
