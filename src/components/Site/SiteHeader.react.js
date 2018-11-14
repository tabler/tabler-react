// @flow

import * as React from "react";
import { Container, Site, Notification, AccountDropdown } from "../";
import type { Props as NotificationTrayProps } from "../Notification/NotificationTray.react";
import type { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown.react";

export type Props = {|
  +children?: React.Node,
  /**
   * header alignment
   */
  +align?: string,
  /**
   * href attribute for the logo
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
   * Include a notifications tray
   */
  +notificationsTray?: NotificationTrayProps,
  +accountDropdown?: AccountDropdownProps,
  +navItems?: React.Node,
  /**
   * Handle toggling/collapsing of the mobile menu when the collapse icon is clicked
   */
  +onMenuToggleClick?: () => void,
|};

/**
 * The very top header bar of your website, containing the logo and some optional
 * action components, such as a NotificationTray or an AccountDropdown on the right hand side
 */
const SiteHeader = ({
  children,
  href,
  align,
  imageURL,
  alt,
  notificationsTray: notificationsTrayFromProps,
  accountDropdown: accountDropdownFromProps,
  navItems,
  onMenuToggleClick,
}: Props): React.Node => {
  const notificationsTray =
    notificationsTrayFromProps &&
    React.createElement(Notification.Tray, notificationsTrayFromProps);

  const accountDropdown =
    accountDropdownFromProps &&
    React.createElement(AccountDropdown, accountDropdownFromProps);

  return (
    <div className="header py-4">
      <Container className={align}>
        <div className="d-flex">
          {children || (
            <React.Fragment>
              <Site.Logo href={href} alt={alt} src={imageURL} />
              <div className="d-flex order-lg-2 ml-auto">
                {navItems}
                {notificationsTray}
                {accountDropdown}
              </div>
              <a
                className="header-toggler d-lg-none ml-3 ml-lg-0"
                onClick={onMenuToggleClick}
              >
                <span className="header-toggler-icon" />
              </a>
            </React.Fragment>
          )}
        </div>
      </Container>
    </div>
  );
};

SiteHeader.displayName = "Site.Header";

export default SiteHeader;
