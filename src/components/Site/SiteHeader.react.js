// @flow

import * as React from "react";
import {
  Container,
  Avatar,
  Site,
  Nav,
  Button,
  Dropdown,
  Notification,
} from "../";

export type Props = {|
  +children?: React.Node,
  /**
   * href attributefor the logo
   */
  +href?: string,
  /**
   * Logo image URL
   */
  +imageURL?: string,
  /**
   * The logo alt attribute
   */
  +alt?: string,
  /**
   * Include the notifications tray
   */
  +withNotifications?: boolean,
  +notificationsObjects?: Array<{|
    +avatarURL?: string,
    +message: React.Node,
    +time?: string,
  |}>,
|};

/**
 * The very top header bar of your website, containing the logo and some optional
 * action components, such as a NotificationTray or an AccountDropdown on the right hand side
 */
const SiteHeader = ({
  children,
  href,
  imageURL,
  alt,
  withNotifications,
  notificationsObjects,
}: Props): React.Node => (
  <div className="header py-4">
    <Container>
      <div className="d-flex">
        {children || (
          <React.Fragment>
            <Site.Logo href={href} alt={alt} src={imageURL} />
            <div className="d-flex order-lg-2 ml-auto">
              <Nav.Item type="div" className="d-none d-md-flex">
                <Button
                  href="https://github.com/tabler/tabler-react"
                  target="_blank"
                  outline
                  size="sm"
                  RootComponent="a"
                  color="primary"
                >
                  Source code
                </Button>
              </Nav.Item>

              {withNotifications && (
                <Notification.Tray
                  notificationsObjects={notificationsObjects}
                />
              )}

              <Dropdown
                isNavLink
                triggerClassName="pr-0 leading-none"
                triggerContent={
                  <React.Fragment>
                    <Avatar imageURL={"./demo/faces/female/25.jpg"} />
                    <span className="ml-2 d-none d-lg-block">
                      <span className="text-default">Jane Pearson</span>
                      <small className="text-muted d-block mt-1">
                        Administrator
                      </small>
                    </span>
                  </React.Fragment>
                }
                position="bottom-end"
                arrow={true}
                arrowPosition="right"
                toggle={false}
                itemsObject={[
                  { icon: "user", value: "Profile" },
                  { icon: "settings", value: "Settings" },
                  { icon: "mail", value: "Inbox", badge: "6" },
                  { icon: "send", value: "Message" },
                  { isDivider: true },
                  { icon: "help-circle", value: "Need help?" },
                  { icon: "log-out", value: "Sign out" },
                ]}
              />
            </div>
            <a
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon" />
            </a>
          </React.Fragment>
        )}
      </div>
    </Container>
  </div>
);

SiteHeader.displayName = "Site.Header";

export default SiteHeader;
