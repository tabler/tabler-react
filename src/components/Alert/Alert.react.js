// @flow

import * as React from "react";
import cn from "classnames";
import { Icon, Avatar } from "../";
import AlertLink from "./AlertLink.react";

type AlertType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +type: AlertType,
  +icon?: string,
  +hasExtraSpace?: boolean,
  +isDismissible?: boolean,
  +avatar?: string
|};

function Alert({
  className,
  children,
  type,
  icon,
  hasExtraSpace,
  isDismissible,
  avatar
}: Props): React.Node {
  const alertClassName = "alert-" + type;
  const classes = cn(
    `alert`,
    alertClassName,
    {
      "alert-icon": !!icon,
      "mt-5 mb-6": hasExtraSpace,
      "alert-dismissible": isDismissible,
      "alert-avatar": !!avatar
    },
    className
  );
  return (
    <div className={classes} role="alert">
      {isDismissible && (
        <button type="button" className="close" data-dismiss="alert" />
      )}
      {avatar && <Avatar image={avatar} />}
      {icon && <Icon name={icon} className="mr-2" isAriaHidden={true} />}
      {children}
    </div>
  );
}

Alert.Link = AlertLink;

export default Alert;
