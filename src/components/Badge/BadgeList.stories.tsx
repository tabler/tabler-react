import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Badge from ".";
import examples from "./BadgeList.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Badge/BadgeList", module);

stories.addDecorator(withKnobs);

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
