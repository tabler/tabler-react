import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Header from ".";
import examples from "./H5.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/H5", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <Header.H5>This is an h5</Header.H5>;
  },
  {
    notes: { markdown: examples },
  }
);
