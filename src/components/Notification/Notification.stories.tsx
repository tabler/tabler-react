import * as React from "react";

import { storiesOf } from "@storybook/react";

import Notification from ".";
import examples from "./Notification.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Notification/Notification", module);

stories.add(
  "Example",
  () => {
    return (
      <Notification
        avatarURL="demo/faces/female/1.jpg"
        message={
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        }
        time="1 hour ago"
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);
