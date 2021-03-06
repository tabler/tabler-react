import * as React from "react";

import { storiesOf } from "@storybook/react";

import Icon from ".";
import examples from "./Icon.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Icon/Icon", module);

stories.add(
  "Example",
  () => {
    return <Icon name="user" />;
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Flags", () => {
  return <Icon flag name="gb" />;
});

stories.add("Payment", () => {
  return <Icon payment name="visa" />;
});
