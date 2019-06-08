import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Dropdown from "./";
import examples from "./Dropdown.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Dropdown/Dropdown", module);

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

stories.add("Variations", () => {
  return (
    <Dropdown
      type="button"
      toggle={false}
      color="primary"
      arrow
      icon="globe"
      triggerContent="Button"
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

stories.add("Items as Objects", () => {
  return (
    <Dropdown
      type="button"
      color="primary"
      arrow
      icon="globe"
      triggerContent="Item Icons and Badges"
      itemsObject={[
        {
          value: "Profile",
          icon: "user",
        },
        {
          value: "Notifications",
          badge: "New!",
          badgeType: "success",
        },
        { isDivider: true },
        { value: "Logout" },
      ]}
    />
  );
});
