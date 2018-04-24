import * as React from 'react';

declare type AlertType =
| "primary"
| "secondary"
| "success"
| "info"
| "warning"
| "danger";

declare namespace Alert {
    export interface AlertProps extends React.Props<Alert> {
      className?: string;
      type: AlertType;
      icon?: string;
      hasExtraSpace?: boolean;
      isDismissible?: boolean;
      avatar?: string;
    }
}
declare class Alert extends React.Component<Alert.AlertProps> { }
export = Alert;
