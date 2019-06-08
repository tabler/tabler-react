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
    return <Dropdown.Trigger>Menu</Dropdown.Trigger>;
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
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.ItemDivider />
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});

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
