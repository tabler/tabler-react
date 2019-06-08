import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import AccountDropdown from "./";
import examples from "./AccountDropdown.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Dropdown/AccountDropdown", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <AccountDropdown
        avatarURL="./demo/faces/female/25.jpg"
        name="Jane Pearson"
        description="Administrator"
        options={[
          "profile",
          { icon: "settings", value: "Settings", to: "/settings" },
          "mail",
          "message",
          "divider",
          "help",
          "logout",
        ]}
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);
