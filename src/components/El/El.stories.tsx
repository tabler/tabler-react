import * as React from "react";

import { storiesOf } from "@storybook/react";

import El from "./El";
import examples from "./El.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("El/El", module);

stories.add(
  "Example",
  () => {
    return <El.Div>Hello World</El.Div>;
  },
  {
    notes: { markdown: examples },
  }
);
