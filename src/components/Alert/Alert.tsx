import React, { useState, CSSProperties } from "react";
import cn from "classnames";
import Icon from "../Icon";
import Avatar from "../Avatar";
import Button from "../Button";
import AlertLink from "./AlertLink";

import { TablerComponent, MouseEvents, PointerEvents } from "../../";

type AlertType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface Props extends TablerComponent, MouseEvents, PointerEvents {
  /**
   * The type of this Alert, changes it's color
   */
  type: AlertType;
  /**
   * An Icon to be displayed on the right hand side of the Alert
   */
  icon?: string;
  /**
   * Add extra space above and below the alert
   */
  hasExtraSpace?: boolean;
  /**
   * Adds an 'X' to the left side of the Alert that dismisses the Alert
   */
  isDismissible?: boolean;
  /**
   * Display an Avatar on the left hand side of this Alert
   */
  avatar?: string;
  /**
   * Handle the dismissing of the Alert yourself
   */
  onDismissClick?: () => void;
}

const Alert = function({
  className,
  style,
  children,
  type,
  icon,
  hasExtraSpace,
  isDismissible,
  avatar,
  onDismissClick,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const [isDismissed, setIsDismissed] = useState(false);

  const _handleOnDismissClick = (): void => {
    if (onDismissClick) onDismissClick();
    setIsDismissed(true);
  };

  const classes = cn(
    "alert",
    `alert-${type}`,
    {
      "alert-icon": !!icon,
      "mt-5 mb-6": hasExtraSpace,
      "alert-dismissible": isDismissible,
      "alert-avatar": !!avatar,
    },
    className
  );

  const events = {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div {...events} className={classes} style={style} role="alert">
      {isDismissible && (
        <Button className="close" onClick={_handleOnDismissClick} />
      )}
      {avatar && <Avatar imageURL={avatar} />}
      {icon && <Icon name={icon} className="mr-2" isAriaHidden={true} />}
      {children}
    </div>
  );
};

export default Alert;
