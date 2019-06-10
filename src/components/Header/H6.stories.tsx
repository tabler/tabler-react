import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Header from ".";
import examples from "./H6.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H6", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <Header.H6>This is an h6</Header.H6>;
  },
  {
    notes: { markdown: examples },
  }
);
