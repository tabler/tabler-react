// @flow

import * as React from "react";

import { Header, List } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsListPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Lists</Header.H2>

      <Header.H3>Basic List</Header.H3>
      <ComponentDemo>
        <List>
          <List.Item>An Item</List.Item>
          <List.Item>Another Item</List.Item>
          <List.Item>A third item</List.Item>
        </List>
      </ComponentDemo>

      <Header.H3>Unstyled List</Header.H3>
      <ComponentDemo>
        <List unstyled>
          <List.Item>An Item</List.Item>
          <List.Item>Another Item</List.Item>
          <List.Item>A third item</List.Item>
        </List>
      </ComponentDemo>

      <Header.H3>Basic List Group</Header.H3>
      <ComponentDemo>
        <List.Group>
          <List.GroupItem>An Item</List.GroupItem>
          <List.GroupItem>Another Item</List.GroupItem>
          <List.GroupItem icon="globe">A third item</List.GroupItem>
        </List.Group>
      </ComponentDemo>

      <Header.H3>List Group Action Items</Header.H3>
      <ComponentDemo>
        <List.Group>
          <List.GroupItem action active>
            Already Active
          </List.GroupItem>
          <List.GroupItem action>Another Item</List.GroupItem>
          <List.GroupItem action>A third item</List.GroupItem>
        </List.Group>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsListPage;
