import * as React from "react";

import { storiesOf } from "@storybook/react";

import { Tabs, Tab } from ".";
import examples from "./Tabs.examples.md";
import Grid from "../Grid";
import Card from "../Card";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Tabs/Tabs", module);

stories.add(
  "Example",
  () => {
    return (
      <Tabs initialTab="Hello">
        <Tab title="Hello">Hello World</Tab>
        <Tab title="Goodbye">Goodbye</Tab>
        <Tab title="Complex">
          <Grid.Row cards deck>
            <Grid.Col md={4}>
              <Card body="Short content" />
            </Grid.Col>
            <Grid.Col md={4}>
              <Card body="Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
            </Grid.Col>
            <Grid.Col md={4}>
              <Card body="Short content" />
            </Grid.Col>
          </Grid.Row>
        </Tab>
      </Tabs>
    );
  },
  {
    notes: { markdown: examples },
  }
);
