import * as React from "react";

import { storiesOf } from "@storybook/react";

import Grid from ".";
import examples from "./Grid.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Grid/Grid", module);

stories.add(
  "Example",
  () => {
    return (
      <Grid.Row>
        <Grid.Col>A</Grid.Col>
        <Grid.Col>B</Grid.Col>
        <Grid.Col>C</Grid.Col>
      </Grid.Row>
    );
  },
  {
    notes: { markdown: examples },
  }
);
