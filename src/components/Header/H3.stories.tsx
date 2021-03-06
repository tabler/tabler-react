import * as React from "react";

import { storiesOf } from "@storybook/react";

import Header from ".";
import examples from "./H3.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H3", module);

stories.add(
  "Example",
  () => {
    return <Header.H3>This is an h3</Header.H3>;
  },
  {
    notes: { markdown: examples },
  }
);
