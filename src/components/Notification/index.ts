import Notification from "./Notification";
import NotificationTray from "./NotificationTray";

const CompoundNotification = Notification as typeof Notification & {
  Tray: typeof NotificationTray;
};

CompoundNotification.Tray = NotificationTray;

export { CompoundNotification as default, Notification, NotificationTray };
