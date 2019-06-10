import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import StatsCard from ".";
import examples from "./StatsCard.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/StatsCard", module);

stories.addDecorator(withKnobs);

stories.add(
  "Layout 1",
  () => {
    return (
      <StatsCard layout={1} movement={-3} total="17" label="Closed Today" />
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Layout 2", () => {
  return <StatsCard layout={2} movement={5} total="423" label="Users online" />;
});
