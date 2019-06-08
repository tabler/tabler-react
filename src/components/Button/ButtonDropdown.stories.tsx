import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from ".";
import examples from "./ButtonDropdown.examples.md";
import { Dropdown } from "..";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Button/ButtonDropdown", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Button.List>
        <Dropdown
          type="button"
          toggle
          color="secondary"
          icon="calendar"
          items={[
            <Dropdown.Item key={1}>Dropdown Link</Dropdown.Item>,
            <Dropdown.Item key={2}>Dropdown Link</Dropdown.Item>,
          ]}
        />
        <Dropdown
          value="Show Calendar"
          color="secondary"
          icon="calendar"
          items={[
            <Dropdown.Item key={1}>Dropdown Link</Dropdown.Item>,
            <Dropdown.Item key={2}>Dropdown Link</Dropdown.Item>,
          ]}
        />
        <Dropdown
          value="Show Calendar"
          color="primary"
          toggle
          items={[
            <Dropdown.Item key={1}>Dropdown Link</Dropdown.Item>,
            <Dropdown.Item key={2}>Dropdown Link</Dropdown.Item>,
          ]}
        />
        <Button.Dropdown value="A Button">
          <Dropdown.Item>News</Dropdown.Item>
          <Dropdown.Item>Messages</Dropdown.Item>
          <Dropdown.ItemDivider />
          <Dropdown.Item>Edit Profile</Dropdown.Item>
        </Button.Dropdown>
      </Button.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);
