import * as React from 'react';

declare type AlertType =
| "primary"
| "secondary"
| "success"
| "info"
| "warning"
| "danger";

declare namespace Alert {
    export interface IAlertProps<T> extends React.HTMLProps<T> {
      className?: string;
      type: AlertType;
      icon?: string;
      hasExtraSpace?: boolean;
      isDismissible?: boolean;
      avatar?: string;
    }
    export type AlertProps = IAlertProps<HTMLDivElement>;
}
declare class Alert extends React.Component<Alert.AlertProps> { }
export = Alert;
