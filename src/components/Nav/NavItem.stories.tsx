import * as React from "react";

import { storiesOf } from "@storybook/react";

import Nav from "./";
import examples from "./NavItem.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Nav/NavItem", module);

stories.add(
  "Example",
  () => {
    return (
      <Nav>
        <Nav.Item hasSubNav value="Menu 1">
          <Nav.SubItem value="Sub Item 1" />
          <Nav.SubItem>Sub Item 2</Nav.SubItem>
          <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
        </Nav.Item>
      </Nav>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Sub-items from prop", () => {
  return (
    <Nav>
      <Nav.Item
        hasSubNav
        value="Menu 1"
        subItems={
          <React.Fragment>
            <Nav.SubItem value="Sub Item 1" />
            <Nav.SubItem>Sub Item 2</Nav.SubItem>
            <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
          </React.Fragment>
        }
      />
    </Nav>
  );
});

stories.add("Sub-items objects prop", () => {
  return (
    <Nav>
      <Nav.Item
        hasSubNav
        value="Menu 1"
        subItemsObjects={[
          {
            value: "Sub Item 1",
          },
          {
            value: "Sub Item 2",
          },
          {
            value: "Sub Item 3",
            icon: "globe",
          },
        ]}
      />
    </Nav>
  );
});
