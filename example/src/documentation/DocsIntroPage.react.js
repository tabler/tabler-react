// @flow
import * as React from "react";

import { Text, Header, Card } from "tabler-react";

import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import DocsPageWrapper from "./DocsPageWrapper.react";
import ComponentDemo from "../ComponentDemo";

function DocsIntroPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Introduction</Header.H2>
      <p>A set of React components for Tabler.</p>
      <p>Add to your project with npm or yarn:</p>
      <SyntaxHighlighter language="bash" style={prism}>
        {`npm install react-tabler-components --save

or

yarn add react-tabler-components`}
      </SyntaxHighlighter>
      <br />
      <p>Import the components into your project and start building:</p>

      <ComponentDemo>
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Body>
            <Text color="blue">Some blue text</Text>
          </Card.Body>
        </Card>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsIntroPage;
