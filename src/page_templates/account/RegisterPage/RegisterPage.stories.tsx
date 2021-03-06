import * as React from "react";

import { storiesOf } from "@storybook/react";

import RegisterPage from ".";
import examples from "./RegisterPage.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Page Templates/RegisterPage", module);

stories.add(
  "Example",
  () => {
    return <RegisterPage />;
  },
  {
    notes: { markdown: examples },
  }
);
