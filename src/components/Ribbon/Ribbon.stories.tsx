import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Ribbon from ".";
import examples from "./Ribbon.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Ribbon/Ribbon", module);

stories.add(
  "Example",
  () => {
    return <Ribbon color="green">-50%</Ribbon>;
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Position", () => {
  return <Ribbon position="top-left" color="orange" icon="star" />;
});

stories.add("Icon", () => {
  return <Ribbon color="orange" icon="star" />;
});

stories.add("Bookmark", () => {
  return (
    <Ribbon color="orange" bookmark>
      -50%
    </Ribbon>
  );
});
