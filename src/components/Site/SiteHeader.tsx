import * as React from "react";

import Container from "../Container";
import SiteLogo from "./SiteLogo";
import Notification from "../Notification";
import AccountDropdown from "../AccountDropdown";

import { Props as NotificationTrayProps } from "../Notification/NotificationTray";
import { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown";
import Nav from "../Nav";

export type Props = {
  children?: React.ReactNode;
  /**
   * header alignment
   */
  align?: string;
  /**
   * href attribute for the logo
   */
  href?: string;
  /**
   * Logo image URL
   */
  imageURL?: string;
  /**
   * The logo alt attribute
   */
  alt?: string;
  /**
   * Include a notifications tray
   */
  notificationsTray?: NotificationTrayProps;
  accountDropdown?: AccountDropdownProps;
  navItems?: React.ReactNode;
  /**
   * Handle toggling/collapsing of the mobile menu when the collapse icon is clicked
   */
  onMenuToggleClick?: () => void;
};

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
}: Props) => {
  const notificationsTray =
    notificationsTrayFromProps &&
    React.createElement(Notification.Tray, notificationsTrayFromProps);

  const accountDropdown =
    accountDropdownFromProps &&
    React.createElement(AccountDropdown, accountDropdownFromProps);

  return (
    <header className="navbar navbar-expand-md">
      <Container className={align}>
        {children || (
          <React.Fragment>
            <a className="navbar-toggler" onClick={onMenuToggleClick}>
              <span className="navbar-toggler-icon" />
            </a>
            <SiteLogo
              className="text-inherit mr-md-3"
              href={href}
              alt={alt}
              src={imageURL}
            />
            <Nav className="align-items-center order-1 order-lg-2">
              {navItems}
              {notificationsTrayFromProps && (
                <Nav.Item className="d-none d-md-flex">
                  <Notification.Tray {...notificationsTrayFromProps} />
                </Nav.Item>
              )}
              {accountDropdown}
            </Nav>
          </React.Fragment>
        )}
      </Container>
    </header>
  );
};

SiteHeader.displayName = "Site.Header";

export default SiteHeader;
