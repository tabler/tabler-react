import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import TabbedCard from ".";
import examples from "./TabbedCard.examples.md";
import { Tab } from "../Tabs";
import Grid from "../Grid";
import Card from "../Card";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/TabbedCard", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <TabbedCard initialTab="Hello">
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
      </TabbedCard>
    );
  },
  {
    notes: { markdown: examples },
  }
);
