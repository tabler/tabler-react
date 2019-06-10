import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Header from ".";
import examples from "./H1.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H1", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <Header.H1>This is an h1</Header.H1>;
  },
  {
    notes: { markdown: examples },
  }
);
