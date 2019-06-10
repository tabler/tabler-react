import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import List from ".";
import examples from "./List.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("List/List", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <List>
        <List.Item>An Item</List.Item>
        <List.Item>Another Item</List.Item>
        <List.Item>A third item</List.Item>
      </List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Unstyled", () => {
  return (
    <List unstyled>
      <List.Item>An Item</List.Item>
      <List.Item>Another Item</List.Item>
      <List.Item>A third item</List.Item>
    </List>
  );
});
