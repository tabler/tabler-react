import * as React from "react";

import { storiesOf } from "@storybook/react";

import Badge from ".";
import examples from "./BadgeList.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Badge/BadgeList", module);

stories.add(
  "Example",
  () => {
    return (
      <Badge.List>
        <Badge>First Badge</Badge>
        <Badge>Second Badge</Badge>
        <Badge>Third Badge</Badge>
      </Badge.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);
