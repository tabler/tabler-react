import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Notification from ".";
import examples from "./NotificationTray.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Notification/NotificationTray", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Notification.Tray
        notificationsObjects={[
          {
            avatarURL: "demo/faces/male/41.jpg",
            message: (
              <React.Fragment>
                <strong>Nathan</strong> pushed new commit: Fix page load
                performance issue.
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
                <strong>Rose</strong> deployed new version of NodeJS REST Api //
                V3
              </React.Fragment>
            ),
            time: "2 hours ago",
          },
        ]}
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Unread Status", () => {
  return (
    <Notification.Tray unread={true}>
      <Notification
        avatarURL="demo/faces/male/41.jpg"
        message={
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        }
        time="10 minutes ago"
      />
      <Notification
        avatarURL="demo/faces/female/1.jpg"
        message={
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        }
        time="1 hour ago"
      />
      <Notification
        avatarURL="demo/faces/female/18.jpg"
        message={
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        }
        time="2 hours ago"
      />
    </Notification.Tray>
  );
});
