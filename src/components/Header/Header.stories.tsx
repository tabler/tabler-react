import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Header from ".";
import examples from "./Header.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Header/Header", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <Header size={1}>A div sized like a h1</Header>;
  },
  {
    notes: { markdown: examples },
  }
);
