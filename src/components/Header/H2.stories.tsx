import * as React from "react";

import { storiesOf } from "@storybook/react";

import Header from ".";
import examples from "./H2.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H2", module);

stories.add(
  "Example",
  () => {
    return <Header.H2>This is an h2</Header.H2>;
  },
  {
    notes: { markdown: examples },
  }
);
