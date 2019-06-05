import Notification, { Props } from "./Notification";
import NotificationTray from "./NotificationTray";

// @ts-ignore
Notification.Tray = NotificationTray;

export { Notification as default, Notification, NotificationTray };
