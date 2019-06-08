import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Dropdown from ".";
import examples from "./DropdownItem.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Dropdown/DropdownItem", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    return (
      <Dropdown.Item badge="New !" badgeType="success">
        Notifications
      </Dropdown.Item>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Example", () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>Menu</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item icon="user">Profile</Dropdown.Item>
        <Dropdown.Item badge="New !" badgeType="success">
          Notifications
        </Dropdown.Item>
        <Dropdown.ItemDivider />
        <Dropdown.Item value="Logout" />
      </Dropdown.Menu>
    </Dropdown>
  );
});
