import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Table from ".";
import examples from "./Table.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Table/TableBody", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col>1</Table.Col>
            <Table.Col>Jon</Table.Col>
            <Table.Col>
              <Button color="primary">Edit</Button>
            </Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("bodyItems prop", () => {
  return (
    <Table
      bodyItems={[
        {
          key: 1,
          item: [
            { content: "1" },
            { content: "Jon" },
            { content: <Button color="primary">Edit</Button> },
          ],
        },
      ]}
    >
      <Table.Header>
        <Table.ColHeader>ID</Table.ColHeader>
        <Table.ColHeader>Name</Table.ColHeader>
        <Table.ColHeader>Action</Table.ColHeader>
      </Table.Header>
    </Table>
  );
});
