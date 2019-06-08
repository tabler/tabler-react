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

stories.add("Using items prop", () => {
  return (
    <Dropdown
      triggerContent="Menu"
      items={<Dropdown.Item>An Item</Dropdown.Item>}
    />
  );
});

stories.add("Using itemsObject prop", () => {
  return (
    <Dropdown
      triggerContent="Menu"
      itemsObject={[
        {
          value: "Profile",
        },
        { isDivider: true },
        { value: "Logout" },
      ]}
    />
  );
});
