import * as React from "react";

import { storiesOf } from "@storybook/react";

import Header from ".";
import examples from "./H4.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H4", module);

stories.add(
  "Example",
  () => {
    return <Header.H4>This is an h4</Header.H4>;
  },
  {
    notes: { markdown: examples },
  }
);
