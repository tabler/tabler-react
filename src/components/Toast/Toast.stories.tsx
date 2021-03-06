import * as React from "react";

import { storiesOf } from "@storybook/react";

import Toast from ".";
import examples from "./Toast.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Toast/Toast", module);

stories.add(
  "Example",
  () => {
    return (
      <Toast show>
        <Toast.Header
          avatar="./img/avatars/002m.jpg"
          title="Mallory Hulme"
          timestamp="11 mins ago"
        />
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    );
  },
  {
    notes: { markdown: examples },
  }
);
