// @flow

import * as React from "react";
import cn from "classnames";
import { Icon, Avatar } from "../";
import AlertLink from "./AlertLink.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +primary?: boolean,
  +secondary?: boolean,
  +success?: boolean,
  +info?: boolean,
  +warning?: boolean,
  +danger?: boolean,
  +icon?: string,
  +extraSpace?: boolean,
  +dismissible?: boolean,
  +avatar?: string,
|};

function Alert({
  className,
  children,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  icon,
  extraSpace,
  dismissible,
  avatar,
  ...props
}: Props): React.Node {
  const classes = cn(
    `alert`,
    {
      "alert-primary": primary,
      "alert-secondary": secondary,
      "alert-success": success,
      "alert-info": info,
      "alert-warning": warning,
      "alert-danger": danger,
      "alert-icon": !!icon,
      "mt-5 mb-6": extraSpace,
      "alert-dismissible": dismissible,
      "alert-avatar": !!avatar,
    },
    className
  );
  return (
    <div className={classes} role="alert" {...props}>
      {dismissible && (
        <button type="button" className="close" data-dismiss="alert" />
      )}
      {avatar && <Avatar image={avatar} />}
      {icon && <Icon name={icon} className="mr-2" aria-hidden="true" />}
      {children}
    </div>
  );
}

Alert.Link = AlertLink;

export default Alert;
