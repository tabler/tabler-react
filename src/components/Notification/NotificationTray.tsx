import * as React from "react";
import Notification, { Props as NotificationProps } from "./Notification";
import Dropdown from "../Dropdown";
import { Nav } from "../Nav";

export interface Props {
  /**
   * Notification components
   */
  children?: React.ReactElement<typeof Notification>[];
  /**
   * An array containing objects of notification data
   */
  notificationsObjects?: NotificationProps[];
  /**
   * Display a small red circle to symbolize that there are unread notifications
   */
  unread?: boolean;
  /**
   * Action to run when the 'Mark All As Read' button is activated
   */
  markAllAsRead?: () => void;
}

/**
 * An Icon triggered Dropdown containing Notifications
 */
function NotificationTray(props: Props) {
  const { children, unread, notificationsObjects, markAllAsRead } = props;
  const notifications = children && React.Children.toArray(children);
  return (
    <Dropdown
      triggerAs={Nav.Link}
      triggerContent={unread && <span className="nav-unread" />}
      toggle={false}
      icon="bell"
      isNavLink={true}
      position="bottom-end"
      arrow={true}
      arrowPosition="right"
      flex
      items={
        <React.Fragment>
          {(notifications &&
            notifications.map((n: React.ReactNode, i) => (
              <Dropdown.Item className="d-flex" key={i}>
                {n}
              </Dropdown.Item>
            ))) ||
            (notificationsObjects &&
              notificationsObjects.map((n, i) => (
                <Dropdown.Item
                  className={`d-flex ${n.unread ? "bg-light" : ""}`}
                  key={i}
                >
                  <Notification
                    unread={n.unread}
                    avatarURL={n.avatarURL}
                    message={n.message}
                    time={n.time}
                  />
                </Dropdown.Item>
              )))}
          {markAllAsRead && unread && (
            <React.Fragment>
              <Dropdown.ItemDivider />
              <Dropdown.Item
                className="text-center text-muted-dark"
                onClick={() => markAllAsRead()}
              >
                Mark all as read
              </Dropdown.Item>
            </React.Fragment>
          )}
        </React.Fragment>
      }
    />
  );
}

export default NotificationTray;
