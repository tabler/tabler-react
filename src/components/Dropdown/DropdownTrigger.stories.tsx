import * as React from "react";

import { storiesOf } from "@storybook/react";

import Dropdown from ".";
import examples from "./DropdownTrigger.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Dropdown/DropdownTrigger", module);

stories.add(
  "Example",
  () => {
    return (
      <Dropdown>
        <Dropdown.Trigger>Menu</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.ItemDivider />
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Trigger prop", () => {
  return (
    <Dropdown trigger={<Dropdown.Trigger>Menu</Dropdown.Trigger>}>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.ItemDivider />
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});

stories.add("Trigger content prop", () => {
  return (
    <Dropdown triggerContent="Menu">
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.ItemDivider />
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});
