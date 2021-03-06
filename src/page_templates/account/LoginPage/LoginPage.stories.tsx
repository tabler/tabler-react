import * as React from "react";

import { storiesOf } from "@storybook/react";

import LoginPage from ".";
import examples from "./LoginPage.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Page Templates/LoginPage", module);

stories.add(
  "Example",
  () => {
    return <LoginPage />;
  },
  {
    notes: { markdown: examples },
  }
);
