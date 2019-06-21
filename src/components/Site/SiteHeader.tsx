import React from "react";

import Container from "../Container";
import SiteLogo from "./SiteLogo";
import Notification from "../Notification";
import AccountDropdown from "../AccountDropdown";

import { Props as NotificationTrayProps } from "../Notification/NotificationTray";
import { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown";
import Nav from "../Nav";
import El from "../El/El";
import Form from "../Form";

export interface SiteHeaderProps {
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
  searchBar?: React.ReactNode;
}

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
  searchBar,
}: SiteHeaderProps) => {
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
            {searchBar && (
              <El.Div
                ml={{ xs: 0, md: 8 }}
                mr="auto"
                d={{ xs: "none", lg: "block" }}
                className="w-auto flex-fill max-w-md"
              >
                {searchBar}
              </El.Div>
            )}
            <Nav
              isMenu={true}
              className="align-items-center order-1 order-lg-2"
            >
              {navItems}
              {notificationsTrayFromProps && (
                <Nav.Item link={false} className="d-none d-md-flex">
                  <Notification.Tray {...notificationsTrayFromProps} />
                </Nav.Item>
              )}
              {accountDropdownFromProps && (
                <AccountDropdown {...accountDropdownFromProps} />
              )}
            </Nav>
          </React.Fragment>
        )}
      </Container>
    </header>
  );
};

export default SiteHeader;
