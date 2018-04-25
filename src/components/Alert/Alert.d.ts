import * as React from 'react';
import AlertLink from './AlertLink';

declare namespace Alert {
    type AlertType =
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "danger";

    interface IAlertProps<T> extends React.HTMLProps<T> {
      type: AlertType;
      icon?: string;
      hasExtraSpace?: boolean;
      isDismissible?: boolean;
      avatar?: string;
    }
    type Props = IAlertProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Link: AlertLink.Component;
      LinkProps: AlertLink.Props;
    }

}
declare const Alert: Alert.Component & Alert.NestedComponents;
export = Alert;
