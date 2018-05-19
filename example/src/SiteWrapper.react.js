// @flow

import * as React from "react";
import { NavLink } from "react-router-dom";

import { Site } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home", LinkComponent: NavLink },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      { value: "Cards Design", to: "/cards", LinkComponent: NavLink },
      { value: "Charts", to: "/charts", LinkComponent: NavLink },
      { value: "Pricing Cards", to: "/pricing-cards", LinkComponent: NavLink },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: NavLink },
      { value: "Icons", to: "/icons", LinkComponent: NavLink },
      { value: "Store", to: "/store", LinkComponent: NavLink },
      { value: "Blog", to: "/blog", LinkComponent: NavLink },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile", LinkComponent: NavLink },
      { value: "Login", to: "/login", LinkComponent: NavLink },
      { value: "Register", to: "/register", LinkComponent: NavLink },
      {
        value: "Forgot password",
        to: "/forgot-password",
        LinkComponent: NavLink,
      },
      { value: "400 error", to: "/400", LinkComponent: NavLink },
      { value: "401 error", to: "/401", LinkComponent: NavLink },
      { value: "403 error", to: "/403", LinkComponent: NavLink },
      { value: "404 error", to: "/404", LinkComponent: NavLink },
      { value: "500 error", to: "/500", LinkComponent: NavLink },
      { value: "503 error", to: "/503", LinkComponent: NavLink },
      { value: "Email", to: "/email", LinkComponent: NavLink },
      { value: "Empty page", to: "/empty-page", LinkComponent: NavLink },
      { value: "RTL", to: "/rtl", LinkComponent: NavLink },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: NavLink,
  },
  { value: "Gallery", to: "/gallery", icon: "image", LinkComponent: NavLink },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

const notificationsObjects = [
  {
    avatarURL: "demo/faces/male/41.jpg",
    message: (
      <React.Fragment>
        <strong>Nathan</strong> pushed new commit: Fix page load performance
        issue.
      </React.Fragment>
    ),
    time: "10 minutes ago",
  },
  {
    avatarURL: "demo/faces/female/1.jpg",
    message: (
      <React.Fragment>
        <strong>Alice</strong> started new task: Tabler UI design.
      </React.Fragment>
    ),
    time: "1 hour ago",
  },
  {
    avatarURL: "demo/faces/female/18.jpg",
    message: (
      <React.Fragment>
        <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
      </React.Fragment>
    ),
    time: "2 hours ago",
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Tabler React",
          imageURL: "./demo/brand/tabler.svg",
          notificationsTray: { notificationsObjects },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
