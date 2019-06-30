import React, { useState } from "react";

import { Site, Nav, Button, Form } from "tabler-react";

const defaultNotificationsObjects = [
  {
    unread: true,
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
    unread: true,
    avatarURL: "demo/faces/female/1.jpg",
    message: (
      <React.Fragment>
        <strong>Alice</strong> started new task: Tabler UI design.
      </React.Fragment>
    ),
    time: "1 hour ago",
  },
  {
    unread: false,
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

const SiteHeader = function() {
  const [notificationsObjects, setNotificationsObjects] = useState<
    { unread: boolean; message: any; [key: string]: any }[]
  >(defaultNotificationsObjects);

  const unreadCount = notificationsObjects.reduce(
    (a, v) => a || v.unread,
    false
  );

  return (
    <Site.Header
      href="/"
      alt="Tabler React"
      imageURL="./demo/brand/tabler.svg"
      navItems={
        <Nav.Item link={false} className="d-none d-md-flex">
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
      }
      notificationsTray={{
        notificationsObjects,
        markAllAsRead: () => {
          const unread = notificationsObjects.map(v => ({
            ...v,
            unread: false,
          }));
          setNotificationsObjects(unread);
        },
        unread: unreadCount,
      }}
      accountDropdown={accountDropdownProps}
      searchBar={
        <Form.Input
          icon="search"
          position="prepend"
          placeholder="Search"
          tabIndex={-1}
          light
        />
      }
    />
  );
};

export default SiteHeader;
