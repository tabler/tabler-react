import * as React from "react";

import { storiesOf } from "@storybook/react";

import List from ".";
import examples from "./ListGroupItem.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("List/ListGroupItem", module);

stories.add(
  "Example",
  () => {
    return (
      <List.Group>
        <List.GroupItem action active>
          Already Active
        </List.GroupItem>
        <List.GroupItem action>Another Item</List.GroupItem>
        <List.GroupItem action icon="globe">
          With an icon!
        </List.GroupItem>
      </List.Group>
    );
  },
  {
    notes: { markdown: examples },
  }
);
