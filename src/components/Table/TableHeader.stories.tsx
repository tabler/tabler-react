import * as React from "react";

import { storiesOf } from "@storybook/react";

import Table from ".";
import examples from "./TableHeader.examples.md";
import { Button } from "../Button";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Table/TableHeader", module);

stories.add(
  "Example",
  () => {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColHeader>ID</Table.ColHeader>
            <Table.ColHeader>Name</Table.ColHeader>
            <Table.ColHeader>Action</Table.ColHeader>
          </Table.Row>
        </Table.Header>
      </Table>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("headerItems prop", () => {
  return (
    <Table
      headerItems={[
        { content: "ID" },
        { content: "Name" },
        { content: "Action" },
      ]}
    />
  );
});
