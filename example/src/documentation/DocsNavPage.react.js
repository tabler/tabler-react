// @flow

import * as React from "react";

import { Header, Nav } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsNavPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Navs</Header.H2>

      <Header.H3>Basic Nav</Header.H3>
      <ComponentDemo>
        <Nav>
          <Nav.Item>
            <Nav.Link to="http://www.example.com" icon="globe">
              Page One
            </Nav.Link>
          </Nav.Item>
          <Nav.Item to="http://www.example.com">Page Two</Nav.Item>
          <Nav.Item value="Page Three" />
          <Nav.Item active icon="user">
            Page Four
          </Nav.Item>
        </Nav>
      </ComponentDemo>

      <Header.H3>Nav with Submenu</Header.H3>
      <ComponentDemo>
        <Nav>
          <Nav.Item hasSubNav value="Menu 1">
            <Nav.SubItem value="Sub Item 1" />
            <Nav.SubItem>Sub Item 2</Nav.SubItem>
            <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
          </Nav.Item>
        </Nav>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsNavPage;
