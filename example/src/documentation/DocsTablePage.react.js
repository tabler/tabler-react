// @flow

import * as React from "react";

import { Header, Table, Button } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsTablePage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Tables</Header.H2>
      <Header.H3>A Basic Table</Header.H3>
      <ComponentDemo>
        <Table>
          <Table.Header>
            <Table.ColHeader>ID</Table.ColHeader>
            <Table.ColHeader>Name</Table.ColHeader>
            <Table.ColHeader>Action</Table.ColHeader>
          </Table.Header>
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
      </ComponentDemo>
      <Header.H3>Shorthand Table</Header.H3>
      <ComponentDemo
        asString={`
<Table
  headerItems={[
    { content: "ID" },
    { content: "Name" },
    { content: "Action" },
  ]}
  bodyItems={[
    [
      { content: "1" },
      { content: "Jon" },
      { content: <Button color="primary">Edit</Button> },
    ],
  ]}
/>
        `}
      >
        <Table
          headerItems={[
            { content: "ID" },
            { content: "Name" },
            { content: "Action" },
          ]}
          bodyItems={[
            [
              { content: "1" },
              { content: "Jon" },
              { content: <Button color="primary">Edit</Button> },
            ],
          ]}
        />
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsTablePage;
