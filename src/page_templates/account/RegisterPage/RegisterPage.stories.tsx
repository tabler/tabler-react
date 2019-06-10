import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import RegisterPage from ".";
import examples from "./RegisterPage.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Page Templates/RegisterPage", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <RegisterPage />;
  },
  {
    notes: { markdown: examples },
  }
);
