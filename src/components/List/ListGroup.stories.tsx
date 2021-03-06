import * as React from "react";

import { storiesOf } from "@storybook/react";

import List from ".";
import examples from "./ListGroup.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("List/ListGroup", module);

stories.add(
  "Example",
  () => {
    return (
      <List.Group>
        <List.GroupItem>An Item</List.GroupItem>
        <List.GroupItem>Another Item</List.GroupItem>
        <List.GroupItem>A third item</List.GroupItem>
      </List.Group>
    );
  },
  {
    notes: { markdown: examples },
  }
);
