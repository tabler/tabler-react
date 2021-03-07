import * as React from "react";

import { storiesOf } from "@storybook/react";

import Grid from ".";
import examples from "./GridRow.examples.md";
import Card from "../Card";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Grid/GridRow", module);

stories.add(
  "Gutters",
  () => {
    return (
      <React.Fragment>
        <Grid.Row g="sm">
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              A
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              B
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              C
            </div>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row g="sm">
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              A
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              B
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              C
            </div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row g="md">
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              A
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              B
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              C
            </div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row g="lg">
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              A
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              B
            </div>
          </Grid.Col>
          <Grid.Col>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px grey solid",
              }}
            >
              C
            </div>
          </Grid.Col>
        </Grid.Row>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Rows of Cards", () => {
  return (
    <React.Fragment>
      <Grid.Row cards>
        <Grid.Col>
          <Card title="Title" body="A" />
        </Grid.Col>
        <Grid.Col>
          <Card
            title="Title"
            body={`orem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        deleniti fugit incidunt.`}
          />
        </Grid.Col>
        <Grid.Col>
          <Card title="Title" body="C" />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row cards deck>
        <Grid.Col>
          <Card title="Title" body="A" />
        </Grid.Col>
        <Grid.Col>
          <Card
            title="Title"
            body={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt.`}
          />
        </Grid.Col>
        <Grid.Col>
          <Card title="Title" body="C" />
        </Grid.Col>
      </Grid.Row>
    </React.Fragment>
  );
});
