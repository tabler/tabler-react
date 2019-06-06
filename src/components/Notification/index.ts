import Notification from "./Notification";
import NotificationTray from "./NotificationTray";

const CompoundNotification = Object.assign(Notification, {
  Tray: NotificationTray,
});

export { CompoundNotification as default, Notification, NotificationTray };
