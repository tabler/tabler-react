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
  /**
   * The type of this Alert, changes it's color
   */
  +type: AlertType,
  /**
   * An Icon to be displayed on the right hand side of the Alert
   */
  +icon?: string,
  /**
   * Add extra space above and below the alert
   */
  +hasExtraSpace?: boolean,
  /**
   * Adds an 'X' to the left side of the Alert that dismisses the Alert
   */
  +isDismissible?: boolean,
  /**
   * Display an Avatar on the left hand side of this Alert
   */
  +avatar?: string,
  /**
   * Handle the dismissing of the Alert yourself
   */
  +onDismissClick?: () => void,
|};

type State = {
  isDismissed: boolean,
};

class Alert extends React.Component<Props, State> {
  state = {
    isDismissed: false,
  };

  _handleOnDismissClick = () => {
    if (this.props.onDismissClick) this.props.onDismissClick();
    this.setState({ isDismissed: true });
  };

  static Link = AlertLink;

  render(): React.Node {
    const { isDismissed } = this.state;
    const {
      className,
      children,
      type,
      icon,
      hasExtraSpace,
      isDismissible,
      avatar,
    }: Props = this.props;
    const alertClassName = "alert-" + type;
    const classes = cn(
      `alert`,
      alertClassName,
      {
        "alert-icon": !!icon,
        "mt-5 mb-6": hasExtraSpace,
        "alert-dismissible": isDismissible,
        "alert-avatar": !!avatar,
      },
      className
    );
    return (
      !isDismissed && (
        <div className={classes} role="alert">
          {isDismissible && (
            <button
              type="button"
              className="close"
              onClick={this._handleOnDismissClick}
            />
          )}
          {avatar && <Avatar imageURL={avatar} />}
          {icon && <Icon name={icon} className="mr-2" isAriaHidden={true} />}
          {children}
        </div>
      )
    );
  }
}

export default Alert;
